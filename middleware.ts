import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Permitir acceso a rutas de autenticación sin token
  const publicPaths = ["/login", "/registro", "/recuperar-password", "/restablecer-password"]
  const isPublicPath = publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  if (isPublicPath) {
    return NextResponse.next()
  }

  // Para rutas de API, la autenticación se maneja en cada endpoint
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  // Para rutas protegidas del frontend, verificar si hay token
  const token = request.cookies.get("auth-token")?.value

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
