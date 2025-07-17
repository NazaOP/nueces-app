import type { NextRequest } from "next/server"
import { readData, writeData, generateId } from "@/lib/db"
import { requireAuth } from "@/lib/auth"

// GET - Obtener lecturas de sensores
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const sensorId = searchParams.get("sensorId")
    const limit = Number.parseInt(searchParams.get("limit") || "100")

    let lecturas = await readData("lecturas_sensores")

    // Filtrar por sensor si se especifica
    if (sensorId) {
      lecturas = lecturas.filter((lectura: any) => lectura.sensorId === sensorId)
    }

    // Ordenar por fecha descendente y limitar
    lecturas = lecturas
      .sort((a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
      .slice(0, limit)

    return Response.json({ lecturas })
  } catch (error) {
    console.error("Error obteniendo lecturas:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// POST - Registrar nueva lectura (para sensores IoT)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sensorId, valor, timestamp } = body

    if (!sensorId || valor === undefined) {
      return Response.json({ error: "sensorId y valor son requeridos" }, { status: 400 })
    }

    // Verificar que el sensor existe
    const sensores = await readData("sensores")
    const sensorIndex = sensores.findIndex((s: any) => s.id === sensorId)

    if (sensorIndex === -1) {
      return Response.json({ error: "Sensor no encontrado" }, { status: 404 })
    }

    // Crear nueva lectura
    const newLectura = {
      id: generateId(),
      sensorId,
      valor,
      fecha: timestamp || new Date().toISOString(),
      estado: "normal", // Se puede calcular basado en umbrales
    }

    // Guardar lectura
    const lecturas = await readData("lecturas_sensores")
    lecturas.push(newLectura)
    await writeData("lecturas_sensores", lecturas)

    // Actualizar sensor con última lectura
    sensores[sensorIndex].ultimaLectura = newLectura.fecha
    sensores[sensorIndex].valor = valor
    sensores[sensorIndex].estado = "online"
    await writeData("sensores", sensores)

    // Verificar umbrales y generar alertas si es necesario
    const sensor = sensores[sensorIndex]
    if (sensor.alertasActivas) {
      if (valor < sensor.umbralMin || valor > sensor.umbralMax) {
        await generarAlertaSensor(sensor, valor, newLectura.fecha)
      }
    }

    return Response.json(
      {
        message: "Lectura registrada exitosamente",
        lectura: newLectura,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error registrando lectura:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

// Función auxiliar para generar alertas
async function generarAlertaSensor(sensor: any, valor: number, fecha: string) {
  try {
    const alertas = await readData("alertas_sensores")

    const newAlerta = {
      id: generateId(),
      sensorId: sensor.id,
      tipo: "umbral_excedido",
      mensaje: `${sensor.nombre} ha registrado un valor de ${valor}${sensor.unidad}, fuera del rango permitido (${sensor.umbralMin}-${sensor.umbralMax}${sensor.unidad})`,
      valor,
      umbralMin: sensor.umbralMin,
      umbralMax: sensor.umbralMax,
      fecha,
      estado: "activa",
      prioridad: valor < sensor.umbralMin * 0.5 || valor > sensor.umbralMax * 1.5 ? "critica" : "advertencia",
    }

    alertas.push(newAlerta)
    await writeData("alertas_sensores", alertas)
  } catch (error) {
    console.error("Error generando alerta:", error)
  }
}
