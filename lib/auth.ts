import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import type { NextRequest } from "next/server"
import { readData } from "./db"

const JWT_SECRET = process.env.JWT_SECRET || "nueces-app-secret-key"

export interface User {
  id: string
  nombre: string
  apellido: string
  email: string
  username: string
  rol: string
  activo: boolean
}

export interface AuthToken {
  userId: string
  username: string
  rol: string
  iat: number
  exp: number
}

// Generar token JWT
export function generateToken(user: User): string {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      rol: user.rol,
    },
    JWT_SECRET,
    { expiresIn: "24h" },
  )
}

// Verificar token JWT
export function verifyToken(token: string): AuthToken | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthToken
  } catch {
    return null
  }
}

// Hashear contraseña
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

// Verificar contraseña
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// Obtener usuario del token de la request
export async function getUserFromRequest(request: NextRequest): Promise<User | null> {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }

  const token = authHeader.substring(7)
  const decoded = verifyToken(token)
  if (!decoded) {
    return null
  }

  const usuarios = await readData("usuarios")
  const user = usuarios.find((u: any) => u.id === decoded.userId && u.activo)

  if (!user) {
    return null
  }

  // No devolver la contraseña
  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}

// Middleware de autenticación
export function requireAuth(handler: Function) {
  return async (request: NextRequest, context: any) => {
    const user = await getUserFromRequest(request)
    if (!user) {
      return Response.json({ error: "No autorizado" }, { status: 401 })
    }

    // Agregar usuario al contexto
    context.user = user
    return handler(request, context)
  }
}

// Middleware de autorización por rol
export function requireRole(roles: string[]) {
  return (handler: Function) => async (request: NextRequest, context: any) => {
    const user = await getUserFromRequest(request)
    if (!user) {
      return Response.json({ error: "No autorizado" }, { status: 401 })
    }

    if (!roles.includes(user.rol)) {
      return Response.json({ error: "Sin permisos suficientes" }, { status: 403 })
    }

    context.user = user
    return handler(request, context)
  }
}
