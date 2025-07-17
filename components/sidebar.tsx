"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, ClipboardList, FileSearch, Home, LogOut, Settings, ShieldCheck, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      icon: Home,
      title: "Dashboard",
    },
    {
      href: "/procesos",
      icon: ClipboardList,
      title: "Procesos",
    },
    {
      href: "/trazabilidad",
      icon: FileSearch,
      title: "Trazabilidad",
    },
    {
      href: "/calidad",
      icon: ShieldCheck,
      title: "Control de Calidad",
    },
    {
      href: "/reportes",
      icon: BarChart3,
      title: "Reportes",
    },
    {
      href: "/usuarios",
      icon: Users,
      title: "Usuarios",
    },
    {
      href: "/configuracion",
      icon: Settings,
      title: "Configuración",
    },
  ]

  return (
    <div className="flex flex-col h-full w-64 border-r bg-background">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-amber-700">NuecesApp</h1>
        <p className="text-sm text-muted-foreground">Sistema de Gestión</p>
      </div>

      <div className="flex-1 px-3 py-2">
        <nav className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Usuario</p>
              <p className="text-xs text-muted-foreground">Administrador</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
