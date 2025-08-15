"use client"

import { useState, useEffect } from "react"
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

  // UseEffect para asegurar que el estado de éxito se reinicie al cargar la página
  useEffect(() => {
    setSuccess(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    // Conexión con la API real
    try {
      const response = await fetch("/api/auth/recuperar-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        const data = await response.json()
        setError(data.error || "Ocurrió un error. Intente de nuevo.")
        setSuccess(false) // Asegurarse de que success se mantenga en false en caso de error
      }
    } catch (err) {
      console.error("Error en la solicitud:", err)
      setError("Error del servidor. Intente nuevamente.")
      setSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative h-16 w-16">
              <Image src="/nuez.jpg" alt="NuecesApp Logo" width={64} height={64} className="object-contain rounded-full" />
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
                <div className="text-center text-sm">
                  <Link href="/login" className="flex items-center justify-center text-amber-700 hover:text-amber-800">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al inicio de sesión
                  </Link>
                </div>
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
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}