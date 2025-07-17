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
import { AlertCircle, ArrowLeft, CheckCircle2, Eye, EyeOff, ShieldAlert } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function RestablecerPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [token, setToken] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [tokenValid, setTokenValid] = useState(true)

  useEffect(() => {
    // Obtener el token de la URL
    const urlToken = searchParams.get("token")
    if (urlToken) {
      setToken(urlToken)
      // Aquí se verificaría la validez del token con el backend
      // Simulamos que el token es válido
      setTokenValid(true)
    } else {
      setTokenValid(false)
    }
  }, [searchParams])

  // Calcular la fortaleza de la contraseña
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0)
      return
    }

    let strength = 0
    // Longitud mínima
    if (password.length >= 8) strength += 25
    // Contiene números
    if (/\d/.test(password)) strength += 25
    // Contiene letras minúsculas y mayúsculas
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25
    // Contiene caracteres especiales
    if (/[^A-Za-z0-9]/.test(password)) strength += 25

    setPasswordStrength(strength)
  }, [password])

  const getStrengthText = () => {
    if (passwordStrength === 0) return "Sin contraseña"
    if (passwordStrength <= 25) return "Débil"
    if (passwordStrength <= 50) return "Regular"
    if (passwordStrength <= 75) return "Buena"
    return "Fuerte"
  }

  const getStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-200"
    if (passwordStrength <= 25) return "bg-red-500"
    if (passwordStrength <= 50) return "bg-amber-500"
    if (passwordStrength <= 75) return "bg-amber-700"
    return "bg-green-500"
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validaciones
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      setIsLoading(false)
      return
    }

    if (passwordStrength < 50) {
      setError("La contraseña es demasiado débil. Intente con una contraseña más segura.")
      setIsLoading(false)
      return
    }

    // Simulación de cambio de contraseña - en producción conectaría con una API real
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
      // Redirigir al login después de 3 segundos
      setTimeout(() => {
        router.push("/login?reset=true")
      }, 3000)
    }, 1500)
  }

  if (!tokenValid) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative h-16 w-16">
                <Image src="/placeholder.svg?height=64&width=64" alt="NuecesApp Logo" fill className="object-contain" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-amber-800">Enlace Inválido</CardTitle>
            <CardDescription>El enlace de recuperación no es válido o ha expirado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <ShieldAlert className="h-5 w-5" />
              <AlertDescription>
                <p className="font-medium">Enlace inválido o expirado</p>
                <p className="mt-2">
                  El enlace que ha utilizado no es válido o ha expirado. Por favor, solicite un nuevo enlace de
                  recuperación.
                </p>
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/recuperar-password">
              <Button className="bg-amber-700 hover:bg-amber-800">Solicitar nuevo enlace</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
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
          <CardTitle className="text-2xl font-bold text-amber-800">Crear Nueva Contraseña</CardTitle>
          <CardDescription>Establezca una nueva contraseña para su cuenta</CardDescription>
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
                <Label htmlFor="password">Nueva Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span>Fortaleza de la contraseña:</span>
                  <span
                    className={`font-medium ${
                      passwordStrength <= 25
                        ? "text-red-500"
                        : passwordStrength <= 50
                          ? "text-amber-500"
                          : passwordStrength <= 75
                            ? "text-amber-700"
                            : "text-green-500"
                    }`}
                  >
                    {getStrengthText()}
                  </span>
                </div>
                <Progress value={passwordStrength} className={`h-1 ${getStrengthColor()}`} />
                <ul className="text-xs text-muted-foreground mt-2 space-y-1 list-disc pl-5">
                  <li className={password.length >= 8 ? "text-green-600" : ""}>Al menos 8 caracteres</li>
                  <li className={/\d/.test(password) ? "text-green-600" : ""}>Al menos un número</li>
                  <li className={/[a-z]/.test(password) && /[A-Z]/.test(password) ? "text-green-600" : ""}>
                    Letras mayúsculas y minúsculas
                  </li>
                  <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-600" : ""}>
                    Al menos un carácter especial
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
                {isLoading ? "Guardando..." : "Guardar Nueva Contraseña"}
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
                <p className="font-medium">Contraseña actualizada correctamente</p>
                <p className="mt-2">
                  Su contraseña ha sido actualizada con éxito. Será redirigido a la página de inicio de sesión en unos
                  segundos.
                </p>
              </AlertDescription>
            </Alert>

            <div className="flex justify-center pt-4">
              <Link href="/login">
                <Button className="bg-amber-700 hover:bg-amber-800">Ir al inicio de sesión</Button>
              </Link>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
