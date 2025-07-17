import type { NextRequest } from "next/server"
import { initializeData } from "@/lib/db"

// POST - Inicializar datos por defecto
export async function POST(request: NextRequest) {
  try {
    await initializeData()

    return Response.json({
      message: "Datos inicializados correctamente",
    })
  } catch (error) {
    console.error("Error inicializando datos:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
