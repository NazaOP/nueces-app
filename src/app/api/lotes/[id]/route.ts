import type { NextRequest } from "next/server"
import { readData, writeData } from "@/lib/db"
import { requireAuth } from "@/lib/auth"

// GET - Obtener lote por ID
export const GET = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const lotes = await readData("lotes")
    const lote = lotes.find((l: any) => l.id === params.id)

    if (!lote) {
      return Response.json({ error: "Lote no encontrado" }, { status: 404 })
    }

    return Response.json({ lote })
  } catch (error) {
    console.error("Error obteniendo lote:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// PUT - Actualizar lote
export const PUT = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const body = await request.json()
    const lotes = await readData("lotes")
    const loteIndex = lotes.findIndex((l: any) => l.id === params.id)

    if (loteIndex === -1) {
      return Response.json({ error: "Lote no encontrado" }, { status: 404 })
    }

    // Actualizar lote
    lotes[loteIndex] = {
      ...lotes[loteIndex],
      ...body,
      fechaActualizacion: new Date().toISOString(),
    }

    await writeData("lotes", lotes)

    return Response.json({
      message: "Lote actualizado exitosamente",
      lote: lotes[loteIndex],
    })
  } catch (error) {
    console.error("Error actualizando lote:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})

// DELETE - Eliminar lote
export const DELETE = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const lotes = await readData("lotes")
    const loteIndex = lotes.findIndex((l: any) => l.id === params.id)

    if (loteIndex === -1) {
      return Response.json({ error: "Lote no encontrado" }, { status: 404 })
    }

    // Eliminar lote
    lotes.splice(loteIndex, 1)
    await writeData("lotes", lotes)

    return Response.json({
      message: "Lote eliminado exitosamente",
    })
  } catch (error) {
    console.error("Error eliminando lote:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
})
