import type { NextRequest } from "next/server"
import { readData, writeData, generateId } from "@/lib/db"
import { requireAuth } from "@/lib/auth"
import { procesoSchema } from "@/lib/validations"

// GET - Obtener todos los procesos
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const tipo = searchParams.get("tipo")
    const estado = searchParams.get("estado")

    let procesos = await readData("procesos")

    // Filtrar por tipo si se especifica
    if (tipo && tipo !== "all") {
      procesos = procesos.filter((proceso: any) => proceso.tipo === tipo)
    }

    // Filtrar por estado si se especifica
    if (estado && estado !== "all") {
      procesos = procesos.filter((proceso: any) => proceso.estado === estado)
    }

    return Response.json({ procesos })
  } catch (error) {
    console.error("Error obteniendo procesos:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// POST - Crear nuevo proceso
export const POST = requireAuth(async (request: NextRequest, context: any) => {
  try {
    const body = await request.json()

    // Validar datos de entrada
    const validatedData = procesoSchema.parse(body)

    // Verificar que el lote existe
    const lotes = await readData("lotes")
    const lote = lotes.find((l: any) => l.id === validatedData.loteId)

    if (!lote) {
      return Response.json({ error: "Lote no encontrado" }, { status: 404 })
    }

    // Crear nuevo proceso
    const newProceso = {
      id: generateId(),
      ...validatedData,
      fechaInicio: new Date().toISOString(),
      fechaFin: null,
      estado: "iniciando",
      avance: 0,
      creadoPor: context.user.id,
    }

    // Guardar proceso
    const procesos = await readData("procesos")
    procesos.push(newProceso)
    await writeData("procesos", procesos)

    // Actualizar estado del lote
    const loteIndex = lotes.findIndex((l: any) => l.id === validatedData.loteId)
    if (loteIndex !== -1) {
      lotes[loteIndex].estado = "en_proceso"
      lotes[loteIndex].procesoActual = validatedData.tipo
      await writeData("lotes", lotes)
    }

    return Response.json(
      {
        message: "Proceso creado exitosamente",
        proceso: newProceso,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creando proceso:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})
