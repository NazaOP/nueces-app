import type { NextRequest } from "next/server"
import { readData } from "@/lib/db"
import { verifyPassword, generateToken } from "@/lib/auth"
import { loginSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar datos de entrada
    const validatedData = loginSchema.parse(body)

    // Buscar usuario
    const usuarios = await readData("usuarios")
    const user = usuarios.find((u: any) => u.username === validatedData.username && u.activo)

    if (!user) {
      return Response.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Verificar contraseña
    const isValidPassword = await verifyPassword(validatedData.password, user.password)
    if (!isValidPassword) {
      return Response.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Generar token
    const token = generateToken(user)

    // Devolver usuario sin contraseña
    const { password, ...userWithoutPassword } = user

    return Response.json({
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    console.error("Error en login:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
