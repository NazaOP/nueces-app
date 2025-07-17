"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft, CheckCircle2, Mail } from "lucide-react"

export default function RecuperarPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validación básica de email
    if (!email || !email.includes("@")) {
      setError("Por favor, ingrese un correo electrónico válido")
      setIsLoading(false)
      return
    }

    // Simulación de envío de correo - en producción conectaría con una API real
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative h-16 w-16">
              <Image src="/placeholder.svg?height=64&width=64" alt="NuecesApp Logo" fill className="object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-amber-800">Recuperar Contraseña</CardTitle>
          <CardDescription>
            Ingrese su correo electrónico para recibir un enlace de recuperación de contraseña
          </CardDescription>
        </CardHeader>

        {!success ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="rounded-md bg-amber-50 p-4 text-sm text-amber-800 border border-amber-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Instrucciones:</h3>
                    <div className="mt-2">
                      <p>
                        Le enviaremos un correo electrónico con un enlace para restablecer su contraseña. El enlace será
                        válido por 24 horas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar Enlace de Recuperación"}
              </Button>
              <div className="text-center text-sm">
                <Link href="/login" className="flex items-center justify-center text-amber-700 hover:text-amber-800">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio de sesión
                </Link>
              </div>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="space-y-4">
            <Alert className="bg-green-50 text-green-800 border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <AlertDescription>
                <p className="font-medium">Correo enviado correctamente</p>
                <p className="mt-2">
                  Hemos enviado un enlace de recuperación a <strong>{email}</strong>. Por favor, revise su bandeja de
                  entrada y siga las instrucciones para restablecer su contraseña.
                </p>
              </AlertDescription>
            </Alert>

            <div className="rounded-md bg-amber-50 p-4 text-sm text-amber-800 border border-amber-200">
              <p>
                Si no recibe el correo en los próximos minutos, revise su carpeta de spam o correo no deseado. El enlace
                expirará en 24 horas.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/login">
                <Button variant="outline" className="text-amber-700 border-amber-200">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio de sesión
                </Button>
              </Link>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
