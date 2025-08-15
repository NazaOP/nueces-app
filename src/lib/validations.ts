import { z } from "zod"

// Validaciones para autenticación
export const loginSchema = z.object({
  username: z.string().min(1, "Usuario requerido"),
  password: z.string().min(1, "Contraseña requerida"),
})

export const registerSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  apellido: z.string().min(1, "Apellido requerido"),
  email: z.string().email("Email inválido"),
  username: z.string().min(3, "Usuario debe tener al menos 3 caracteres"),
  password: z.string().min(6, "Contraseña debe tener al menos 6 caracteres"),
  rol: z.enum(["admin", "supervisor", "operador", "calidad", "logistica"]),
})

// Validaciones para lotes
export const loteSchema = z.object({
  id: z.string().optional(),
  origen: z.string().min(1, "Origen requerido"),
  cantidad: z.number().positive("Cantidad debe ser positiva"),
  variedad: z.string().min(1, "Variedad requerida"),
  humedadInicial: z.number().min(0).max(100, "Humedad debe estar entre 0 y 100%"),
})

// Validaciones para procesos
export const procesoSchema = z.object({
  tipo: z.enum(["secado", "pelado", "clasificacion", "empaque"]),
  loteId: z.string().min(1, "Lote requerido"),
  cantidad: z.number().positive("Cantidad debe ser positiva"),
  responsable: z.string().min(1, "Responsable requerido"),
  parametros: z.object({}).passthrough(),
})

// Validaciones para sensores
export const sensorSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  tipo: z.enum(["humedad", "temperatura", "presion", "viento"]),
  ubicacion: z.string().min(1, "Ubicación requerida"),
  intervalo: z.number().positive("Intervalo debe ser positivo"),
  umbralMin: z.number(),
  umbralMax: z.number(),
  alertasActivas: z.boolean(),
})

// Validaciones para controles de calidad
export const controlCalidadSchema = z.object({
  loteId: z.string().min(1, "Lote requerido"),
  tipo: z.enum(["humedad", "color", "calibre", "defectos"]),
  valor: z.union([z.number(), z.string()]),
  responsable: z.string().min(1, "Responsable requerido"),
  observaciones: z.string().optional(),
})

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string(),
})

export const recuperarPasswordSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
})