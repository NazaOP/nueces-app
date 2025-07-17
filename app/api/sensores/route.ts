import type { NextRequest } from "next/server"
import { readData, writeData, generateId } from "@/lib/db"
import { requireAuth } from "@/lib/auth"
import { sensorSchema } from "@/lib/validations"

// GET - Obtener todos los sensores
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const tipo = searchParams.get("tipo")
    const estado = searchParams.get("estado")

    let sensores = await readData("sensores")

    // Filtrar por tipo si se especifica
    if (tipo && tipo !== "all") {
      sensores = sensores.filter((sensor: any) => sensor.tipo === tipo)
    }

    // Filtrar por estado si se especifica
    if (estado && estado !== "all") {
      sensores = sensores.filter((sensor: any) => sensor.estado === estado)
    }

    return Response.json({ sensores })
  } catch (error) {
    console.error("Error obteniendo sensores:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// POST - Crear nuevo sensor
export const POST = requireAuth(async (request: NextRequest, context: any) => {
  try {
    const body = await request.json()

    // Validar datos de entrada
    const validatedData = sensorSchema.parse(body)

    // Crear nuevo sensor
    const newSensor = {
      id: generateId(),
      ...validatedData,
      ultimaLectura: null,
      valor: null,
      bateria: 100,
      estado: "offline",
      fechaCreacion: new Date().toISOString(),
      creadoPor: context.user.id,
    }

    // Guardar sensor
    const sensores = await readData("sensores")
    sensores.push(newSensor)
    await writeData("sensores", sensores)

    return Response.json(
      {
        message: "Sensor creado exitosamente",
        sensor: newSensor,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creando sensor:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})
