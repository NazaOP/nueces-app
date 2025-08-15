import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Permitir acceso a rutas de autenticación sin token
  const publicPaths = ["/login", "/registro", "/recuperar-password", "/restablecer-password"]
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path))

  // Permitir archivos estáticos e imágenes desde /public
  const isStaticAsset = pathname.match(/\.(jpg|jpeg|png|svg|webp|ico|css|js)$/)

  // Ignorar rutas públicas y archivos estáticos
  if (isPublicPath || isStaticAsset) {
    return NextResponse.next()
  }

  // Para rutas de API, la autenticación se maneja en cada endpoint
  if (pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  // Verificar token para rutas protegidas
  const token = request.cookies.get("auth-token")?.value

  if (!token && !pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
