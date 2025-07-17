"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Verificar si el usuario viene de un registro exitoso
    const registered = searchParams.get("registered")
    if (registered === "true") {
      setSuccess("Registro exitoso. Ahora puede iniciar sesión.")
    }

    // Verificar si el usuario viene de un restablecimiento de contraseña exitoso
    const reset = searchParams.get("reset")
    if (reset === "true") {
      setSuccess("Contraseña restablecida con éxito. Ahora puede iniciar sesión con su nueva contraseña.")
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    // Simulación de login - en producción conectaría con una API real
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        router.push("/dashboard")
      } else {
        setError("Usuario o contraseña incorrectos")
        setIsLoading(false)
      }
    }, 1000)
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
          <CardTitle className="text-2xl font-bold text-amber-800">NuecesApp</CardTitle>
          <CardDescription>Ingrese sus credenciales para acceder al sistema</CardDescription>
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
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link href="/recuperar-password" className="text-xs text-amber-700 hover:text-amber-800">
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
            <div className="text-center text-sm">
              ¿No tiene una cuenta?{" "}
              <Link href="/registro" className="text-amber-700 hover:text-amber-800 font-medium">
                Regístrese aquí
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
