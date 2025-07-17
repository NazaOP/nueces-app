"use client"

// Este archivo es un ejemplo de cómo podrías usar el Sidebar.
// Si no lo tienes, puedes crearlo o integrar el contenido de AppSidebar directamente en layout.tsx
// o en otro componente de nivel superior.
// Si ya tienes un AppSidebar, asegúrate de que su contenido sea similar al que se muestra en sidebar.tsx
// (la parte export default function AppSidebar()).

import {
  Home,
  Package,
  Factory,
  Sprout,
  BarChart,
  Plug,
  User2,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Plus,
  Inbox,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/sidebar" // Importa los componentes del sidebar

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Lotes",
    url: "/lotes",
    icon: Package,
  },
  {
    title: "Procesos",
    url: "/procesos",
    icon: Factory,
  },
  {
    title: "Trazabilidad",
    url: "/trazabilidad",
    icon: Sprout,
  },
  {
    title: "Calidad",
    url: "/calidad",
    icon: BarChart,
  },
  {
    title: "Sensores IoT",
    url: "/sensores",
    icon: Plug,
  },
]

const projects = [
  { name: "Project Alpha", icon: Home, url: "#" },
  { name: "Project Beta", icon: Inbox, url: "#" },
  { name: "Project Gamma", icon: Calendar, url: "#" },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="hidden md:flex">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  NuecesApp
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Mi Empresa</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Configuración</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Projects
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupAction title="Add Project">
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {projects.map((project) => (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton asChild>
                        <a href={project.url}>
                          <project.icon />
                          <span>{project.name}</span>
                        </a>
                      </SidebarMenuButton>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction>
                            <MoreHorizontal />
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start">
                          <DropdownMenuItem>
                            <span>Edit Project</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Delete Project</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Usuario Actual
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
