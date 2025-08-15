import type { NextRequest } from "next/server"
import { readData } from "@/lib/db"
import { requireAuth } from "@/lib/auth"

// GET - Obtener estadísticas del dashboard
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    // Obtener datos de diferentes fuentes
    const lotes = await readData("lotes")
    const procesos = await readData("procesos")
    const sensores = await readData("sensores")
    const alertas = await readData("alertas_sensores")

    // Calcular estadísticas de stock
    const stockTotal = lotes.reduce((total: number, lote: any) => total + lote.cantidad, 0)
    const enProceso = lotes
      .filter((lote: any) => lote.estado === "en_proceso")
      .reduce((total: number, lote: any) => total + lote.cantidad, 0)
    const listoExportar = lotes
      .filter((lote: any) => lote.estado === "terminado")
      .reduce((total: number, lote: any) => total + lote.cantidad, 0)

    // Calcular alertas activas
    const alertasActivas = alertas.filter((alerta: any) => alerta.estado === "activa").length

    // Calcular procesos activos
    const procesosActivos = procesos.filter(
      (proceso: any) => proceso.estado === "en_proceso" || proceso.estado === "iniciando",
    ).length

    // Calcular sensores online
    const sensoresOnline = sensores.filter((sensor: any) => sensor.estado === "online").length
    const sensoresTotal = sensores.length

    // Distribución por calibre (simulada)
    const distribucionCalibre = [
      { calibre: "Extra Large (32-34)", porcentaje: 28, cantidad: Math.round(stockTotal * 0.28) },
      { calibre: "Large (30-32)", porcentaje: 42, cantidad: Math.round(stockTotal * 0.42) },
      { calibre: "Medium (28-30)", porcentaje: 22, cantidad: Math.round(stockTotal * 0.22) },
      { calibre: "Small (< 28)", porcentaje: 8, cantidad: Math.round(stockTotal * 0.08) },
    ]

    // Indicadores de calidad promedio
    const indicadoresCalidad = {
      humedadPromedio: 8.2,
      colorPromedio: "Ámbar Claro",
      rendimientoPromedio: 44,
      defectosPromedio: 2.3,
    }

    // Actividad reciente (últimos movimientos)
    const actividadReciente = [
      {
        id: 1,
        accion: "Ingreso de lote",
        detalles: `Lote #${lotes[lotes.length - 1]?.id} - ${lotes[lotes.length - 1]?.cantidad} kg`,
        usuario: "Sistema",
        tiempo: "Hace 10 minutos",
      },
      {
        id: 2,
        accion: "Finalización de secado",
        detalles: "Lote #A2345 - Humedad final: 8%",
        usuario: "María González",
        tiempo: "Hace 45 minutos",
      },
    ]

    return Response.json({
      stockTotal,
      enProceso,
      listoExportar,
      alertasActivas,
      procesosActivos,
      sensoresOnline,
      sensoresTotal,
      distribucionCalibre,
      indicadoresCalidad,
      actividadReciente,
    })
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})
