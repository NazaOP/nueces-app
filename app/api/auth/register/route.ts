import type { NextRequest } from "next/server"
import { readData, writeData, generateId } from "@/lib/db"
import { hashPassword } from "@/lib/auth"
import { registerSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar datos de entrada
    const validatedData = registerSchema.parse(body)

    // Verificar si el usuario ya existe
    const usuarios = await readData("usuarios")
    const existingUser = usuarios.find(
      (u: any) => u.username === validatedData.username || u.email === validatedData.email,
    )

    if (existingUser) {
      return Response.json({ error: "Usuario o email ya existe" }, { status: 400 })
    }

    // Hashear contraseña
    const hashedPassword = await hashPassword(validatedData.password)

    // Crear nuevo usuario
    const newUser = {
      id: generateId(),
      ...validatedData,
      password: hashedPassword,
      activo: true,
      fechaCreacion: new Date().toISOString(),
    }

    // Guardar usuario
    usuarios.push(newUser)
    await writeData("usuarios", usuarios)

    // Devolver usuario sin contraseña
    const { password, ...userWithoutPassword } = newUser

    return Response.json(
      {
        message: "Usuario registrado exitosamente",
        user: userWithoutPassword,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error en registro:", error)
    return Response.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
