"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/sidebar-context";
import { useRouter } from "next/navigation";
import React from 'react';

// Elimina la constante metadata de aquí
// const inter = Inter({ subsets: ["latin"] });
// export const metadata = {
//   title: "NuecesApp - Dashboard",
//   description: "Sistema de gestión para producción y procesamiento de nueces",
// };


export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push("/login");
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider>
        <div className="flex">
          <Sidebar handleLogout={handleLogout} />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}