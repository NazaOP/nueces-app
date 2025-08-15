"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LogOut, Home, Sprout, BarChart, FileText, Settings, User, Box, Search } from "lucide-react";

// Este es el componente de la barra lateral que contiene el botón "Cerrar"
export default function DashboardSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Limpiar el token de sesión del localStorage
    //    Asegúrate de que 'token' sea la clave correcta que usas
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    // 2. Redirigir al usuario a la página de login
    router.push("/login");
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg p-4 flex flex-col">
      {/* Sección Superior: Logo y Título */}
      <div className="flex items-center space-x-3 mb-8">
        <Image
          src="/nuez.jpg" // Asegúrate de que esta ruta sea correcta
          alt="Logo NuecesApp"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-amber-800">NuecesApp</span>
      </div>

      {/* Sección de Navegación */}
      <nav className="flex-1 space-y-2">
        <NavLink href="/dashboard" icon={Home} label="Dashboard" />
        <NavLink href="/procesos" icon={Sprout} label="Procesos" />
        <NavLink href="/trazabilidad" icon={Search} label="Trazabilidad" />
        <NavLink href="/control-de-calidad" icon={Box} label="Control de Calidad" />
        <NavLink href="/reportes" icon={FileText} label="Reportes" />
        <NavLink href="/usuarios" icon={User} label="Usuarios" />
        <NavLink href="/configuracion" icon={Settings} label="Configuración" />
      </nav>

      {/* Sección Inferior: Información del Usuario y Botón de Cerrar */}
      <div className="mt-auto space-y-4">
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 text-sm">
          <div className="flex-1">
            <div className="font-semibold">Usuario</div>
            <div className="text-gray-500">Administrador</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center p-2 rounded-lg text-amber-700 bg-amber-100 hover:bg-amber-200 transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Cerrar
        </button>
      </div>
    </aside>
  );
}

// Componente de enlace de navegación para evitar la repetición de código
const NavLink = ({ href, icon: Icon, label }) => {
  return (
    <Link href={href} className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-amber-50 hover:text-amber-700 transition-colors">
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};