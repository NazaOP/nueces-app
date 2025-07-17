"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function RecuperarPasswordV1Page() {
  const router = useRouter()
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
          <CardDescription>Ingrese su correo electrónico para recibir instrucciones de recuperación</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription>
                  Se ha enviado un correo electrónico a <strong>{email}</strong> con instrucciones para recuperar su
                  contraseña.
                </AlertDescription>
              </Alert>
            )}

            {!success && (
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
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {!success ? (
              <>
                <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Recuperar Contraseña"}
                </Button>
              </>
            ) : (
              <Button
                type="button"
                variant="outline"
                className="w-full border-amber-200 text-amber-700 hover:bg-amber-50"
                onClick={() => router.push("/login")}
              >
                Volver al inicio de sesión
              </Button>
            )}
            {!success && (
              <div className="text-center text-sm">
                <Link href="/login" className="flex items-center justify-center text-amber-700 hover:text-amber-800">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio de sesión
                </Link>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
