// src/app/api/auth/recuperar-password/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as jwt from "jsonwebtoken";
import { Resend } from 'resend';

// Validamos que las variables de entorno necesarias estén definidas
const JWT_SECRET = process.env.JWT_SECRET;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!JWT_SECRET || !RESEND_API_KEY || !BASE_URL) {
  // Manejamos el caso en el que las variables de entorno no están configuradas
  console.error("Faltan variables de entorno para la recuperación de contraseña.");
}

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log("Llamada a la API de recuperación de contraseña para:", email);

    if (!email) {
      return NextResponse.json({ error: "El correo electrónico es requerido." }, { status: 400 });
    }

    const user = await db.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "Si el usuario existe, se le enviará un correo electrónico." }, { status: 200 });
    }

    const resetToken = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    await db.usuario.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpiry: new Date(Date.now() + 3600000), // Expira en 1 hora
      },
    });

    const resetUrl = `${BASE_URL}/restablecer-password?token=${resetToken}`;

    // Enviamos el correo usando la API de Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // <-- Asegúrate de que esta dirección esté verificada en Resend
      to: user.email, // <-- Enviamos el correo al usuario que lo solicitó
      subject: "Recuperación de Contraseña para NuecesApp",
      html: `<p>Hola,</p>
             <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
             <a href="${resetUrl}">Restablecer Contraseña</a>
             <p>Este enlace es válido por 1 hora.</p>
             <p>Si no solicitaste esto, puedes ignorar este correo.</p>`,
    });

    return NextResponse.json({ message: "Si el usuario existe, se le enviará un correo electrónico." }, { status: 200 });

  } catch (error) {
    console.error("Error en la solicitud de recuperación:", error);
    return NextResponse.json({ error: "Error interno del servidor. Por favor, intente de nuevo." }, { status: 500 });
  }
}