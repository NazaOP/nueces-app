import type React from "react"
import { Inter } from "next/font/google"
import "@/app/globals.css" // ¡Esta es la línea corregida!
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar" // Asumiendo que Sidebar es el componente principal del sidebar

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NuecesApp - Sistema de Gestión de Stock",
  description: "Sistema de gestión para producción y procesamiento de nueces",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
