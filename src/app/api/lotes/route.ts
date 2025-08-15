import type { NextRequest } from "next/server"
import { readData, writeData, generateId } from "@/lib/db"
import { requireAuth } from "@/lib/auth"
import { loteSchema } from "@/lib/validations"

// GET - Obtener todos los lotes
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const estado = searchParams.get("estado")
    const origen = searchParams.get("origen")

    let lotes = await readData("lotes")

    // Filtrar por estado si se especifica
    if (estado && estado !== "all") {
      lotes = lotes.filter((lote: any) => lote.estado === estado)
    }

    // Filtrar por origen si se especifica
    if (origen && origen !== "all") {
      lotes = lotes.filter((lote: any) => lote.origen === origen)
    }

    return Response.json({ lotes })
  } catch (error) {
    console.error("Error obteniendo lotes:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// POST - Crear nuevo lote
export const POST = requireAuth(async (request: NextRequest, context: any) => {
  try {
    const body = await request.json()

    // Validar datos de entrada
    const validatedData = loteSchema.parse(body)

    // Crear nuevo lote
    const newLote = {
      id: validatedData.id || generateId(),
      ...validatedData,
      estado: "recibido",
      humedadActual: validatedData.humedadInicial,
      fechaIngreso: new Date().toISOString(),
      procesoActual: null,
      ubicacion: "Recepción",
      responsable: context.user.nombre + " " + context.user.apellido,
      avance: 0,
    }

    // Guardar lote
    const lotes = await readData("lotes")
    lotes.push(newLote)
    await writeData("lotes", lotes)

    return Response.json(
      {
        message: "Lote creado exitosamente",
        lote: newLote,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creando lote:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})
