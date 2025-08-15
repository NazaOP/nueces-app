import type { NextRequest } from "next/server"
import { getUserFromRequest } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request)

    if (!user) {
      return Response.json({ error: "No autorizado" }, { status: 401 })
    }

    return Response.json({ user })
  } catch (error) {
    console.error("Error obteniendo usuario:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
