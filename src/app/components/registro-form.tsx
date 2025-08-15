"use client"

import { useState, useTransition } from "react"
import { registrarUsuario } from "@/app/actions/registro"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, User, AlertCircle, CheckCircle } from "lucide-react"

export default function RegistroForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{
    error?: string
    success?: boolean
    message?: string
  } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      setResult(null)
      const response = await registrarUsuario(formData)
      setResult(response)

      // Si fue exitoso, limpiar el formulario
      if (response.success) {
        const form = document.querySelector("form") as HTMLFormElement
        form?.reset()
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-amber-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-amber-800">Crear Cuenta</CardTitle>
          <CardDescription>Complete sus datos para registrarse</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            {result?.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{result.error}</AlertDescription>
              </Alert>
            )}

            {result?.success && (
              <Alert className="border-green-200 bg-green-50 text-green-800">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>{result.message}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="usuario">Usuario</Label>
              <Input
                id="usuario"
                name="usuario"
                type="email"
                placeholder="ejemplo@correo.com"
                required
                disabled={isPending}
                defaultValue="nazabiscayart@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contraseña">Contraseña</Label>
              <Input
                id="contraseña"
                name="contraseña"
                type="password"
                placeholder="••••••••"
                required
                disabled={isPending}
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                "Crear Cuenta"
              )}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">¿Ya tiene una cuenta? </span>
            <a href="/login" className="text-amber-600 hover:text-amber-700 font-medium">
              Inicie sesión aquí
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
