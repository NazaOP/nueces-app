// Simulación de base de datos - En producción usar PostgreSQL, MySQL, etc.
import fs from "fs/promises"
import path from "path"

const DB_PATH = path.join(process.cwd(), "data")

// Asegurar que el directorio de datos existe
async function ensureDataDir() {
  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.mkdir(DB_PATH, { recursive: true })
  }
}

// Leer datos de un archivo JSON
export async function readData(filename: string) {
  await ensureDataDir()
  const filePath = path.join(DB_PATH, `${filename}.json`)

  try {
    const data = await fs.readFile(filePath, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Escribir datos a un archivo JSON
export async function writeData(filename: string, data: any) {
  await ensureDataDir()
  const filePath = path.join(DB_PATH, `${filename}.json`)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

// Generar ID único
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Inicializar datos por defecto
export async function initializeData() {
  await ensureDataDir()

  // Usuarios por defecto
  const defaultUsers = [
    {
      id: "user_1",
      nombre: "Administrador",
      apellido: "Sistema",
      email: "admin@nuecesapp.com",
      username: "admin",
      password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password: admin
      rol: "admin",
      activo: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: "user_2",
      nombre: "María",
      apellido: "González",
      email: "maria@nuecesapp.com",
      username: "maria",
      password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
      rol: "supervisor",
      activo: true,
      fechaCreacion: new Date().toISOString(),
    },
  ]

  // Lotes por defecto
  const defaultLotes = [
    {
      id: "A2345",
      origen: "Finca Los Nogales",
      fechaIngreso: "2025-05-15T08:30:00Z",
      cantidad: 1250,
      variedad: "Chandler",
      estado: "en_proceso",
      humedadInicial: 18,
      humedadActual: 12,
      color: "ambar_claro",
      calibrePromedio: 32,
      procesoActual: "secado",
      ubicacion: "Secador #2",
      responsable: "María González",
      avance: 65,
    },
    {
      id: "B1278",
      origen: "Finca San José",
      fechaIngreso: "2025-05-10T10:15:00Z",
      cantidad: 2500,
      variedad: "Franquette",
      estado: "terminado",
      humedadInicial: 16,
      humedadActual: 8,
      color: "ambar_claro",
      calibrePromedio: 30,
      procesoActual: "completado",
      ubicacion: "Almacén",
      responsable: "Juan Pérez",
      avance: 100,
    },
  ]

  // Procesos por defecto
  const defaultProcesos = [
    {
      id: "P-001",
      tipo: "secado",
      loteId: "A2345",
      cantidad: 1250,
      fechaInicio: "2025-05-16T09:00:00Z",
      fechaFin: null,
      responsable: "María González",
      estado: "en_proceso",
      parametros: {
        humedadInicial: 18,
        humedadObjetivo: 8,
        temperatura: 28,
      },
      avance: 65,
    },
    {
      id: "P-002",
      tipo: "clasificacion",
      loteId: "B1278",
      cantidad: 2500,
      fechaInicio: "2025-05-12T08:00:00Z",
      fechaFin: "2025-05-14T16:00:00Z",
      responsable: "Juan Pérez",
      estado: "completado",
      parametros: {
        criterio: "calibre",
        rendimiento: 92,
      },
      avance: 100,
    },
  ]

  // Sensores por defecto
  const defaultSensores = [
    {
      id: "S001",
      nombre: "Sensor Humedad #1",
      tipo: "humedad",
      ubicacion: "Secador #1",
      ultimaLectura: new Date().toISOString(),
      valor: 12,
      unidad: "%",
      bateria: 85,
      estado: "online",
      intervalo: 15,
      umbralMin: 7,
      umbralMax: 14,
      alertasActivas: true,
    },
    {
      id: "S002",
      nombre: "Sensor Temperatura #1",
      tipo: "temperatura",
      ubicacion: "Secador #1",
      ultimaLectura: new Date().toISOString(),
      valor: 28,
      unidad: "°C",
      bateria: 45,
      estado: "online",
      intervalo: 15,
      umbralMin: 18,
      umbralMax: 30,
      alertasActivas: true,
    },
  ]

  // Escribir datos iniciales si no existen
  const existingUsers = await readData("usuarios")
  if (existingUsers.length === 0) {
    await writeData("usuarios", defaultUsers)
  }

  const existingLotes = await readData("lotes")
  if (existingLotes.length === 0) {
    await writeData("lotes", defaultLotes)
  }

  const existingProcesos = await readData("procesos")
  if (existingProcesos.length === 0) {
    await writeData("procesos", defaultProcesos)
  }

  const existingSensores = await readData("sensores")
  if (existingSensores.length === 0) {
    await writeData("sensores", defaultSensores)
  }
}
