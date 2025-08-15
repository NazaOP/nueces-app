"use client";

import { useSidebar } from "./sidebar-context";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Home, List, Search, CheckCircle, FileText, Users, Settings, LogOut, User } from "lucide-react";
import React from 'react';

const menu = [
  // ... (tu menú)
];

export default function Sidebar({ handleLogout }) { // Acepta la prop handleLogout
  const { isOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <aside // ...
      className={`bg-[#fff7ed] text-orange-700 h-screen flex flex-col justify-between shadow-md transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* ... (tu JSX anterior) */}
      <div className="px-5 pb-5">
        {/* ... (información de usuario) */}
        <button
          className={`flex items-center gap-2 py-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm w-full justify-center`}
          onClick={handleLogout} // Conecta la prop directamente
        >
          <LogOut size={16} />
          {isOpen && <span>Cerrar</span>}
        </button>
      </div>
    </aside>
  );
}