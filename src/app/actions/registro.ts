"use server"

export async function registrarUsuario(formData: FormData) {
  try {
    const usuario = formData.get("usuario") as string
    const contraseña = formData.get("contraseña") as string

    console.log("Server Action - Datos recibidos:", { usuario, contraseña: "***" })

    // Validaciones
    if (!usuario || !contraseña) {
      return {
        error: "Usuario y contraseña son requeridos",
        success: false,
      }
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(usuario)) {
      return {
        error: "Formato de email inválido",
        success: false,
      }
    }

    // Validar longitud de contraseña
    if (contraseña.length < 6) {
      return {
        error: "La contraseña debe tener al menos 6 caracteres",
        success: false,
      }
    }

    // Simular procesamiento (aquí iría tu lógica de base de datos)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Usuario registrado exitosamente:", usuario)

    return {
      success: true,
      message: "Usuario registrado exitosamente",
      usuario: usuario,
    }
  } catch (error) {
    console.error("Error en Server Action:", error)
    return {
      error: "Error interno del servidor",
      success: false,
    }
  }
}
