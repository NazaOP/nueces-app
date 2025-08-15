"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle } from "lucide-react"

// ...existing imports...

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Validación simple de email
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    // Validaciones frontend
    if (!validateEmail(email)) {
      setErrorMessage("Ingrese un email válido.")
      return
    }
    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.")
      return
    }

    setLoading(true)
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    setLoading(false)

    if (response.ok) {
      setSuccess(true)
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } else {
      const data = await response.json()
      setErrorMessage(data.error || "Error al registrar")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50">
      <Card className="w-[400px]">
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/nuez.jpg"
            alt="Logo de NuecesApp"
            width={60}
            height={60}
            priority
            className="mb-2"
          />
          <CardTitle className="text-center text-brown-700">Crear Cuenta</CardTitle>
          <CardDescription className="text-center">
            Complete sus datos para registrarse
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {success && (
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Registro exitoso</AlertTitle>
                <AlertDescription>Redirigiendo al login...</AlertDescription>
              </Alert>
            )}
            {errorMessage && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            <div>
              <Label htmlFor="email">Usuario</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" disabled={loading}>
              {loading ? "Registrando..." : "Crear Cuenta"}
            </Button>
            <p className="text-sm text-muted-foreground">
              ¿Ya tiene una cuenta?{" "}
              <Link href="/login" className="text-orange-600 hover:underline">
                Inicie sesión aquí
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
// ...existing code...