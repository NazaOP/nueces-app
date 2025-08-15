"use client";

import React from 'react';
import { Button } from "@/components/ui/button"; // Asumo que usas componentes shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, AlertCircle, BarChart, HardHat, FileText, CheckCircle } from "lucide-react";

// Componente para las tarjetas de información
const InfoCard = ({ title, value, subtext, icon, valueColor }) => (
  <Card className="flex flex-col">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon && React.cloneElement(icon, { className: "h-4 w-4 text-gray-500" })}
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
      <p className="text-xs text-gray-500">{subtext}</p>
    </CardContent>
  </Card>
);

// Componente para los elementos del menú de gráficos
const TabButton = ({ label, isActive, onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={`p-2 rounded-lg text-sm transition-colors ${isActive
        ? "text-orange-700 font-semibold border-b-2 border-orange-700"
        : "text-gray-500 hover:bg-gray-100"
      }`}
  >
    {label}
  </Button>
);

export default function DashboardPage() {
  // Aquí puedes manejar el estado de la pestaña activa si lo deseas
  const [activeTab, setActiveTab] = React.useState("stock");

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Cabecera del Dashboard */}
      <div className="flex justify-between items-center pb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Resumen del estado actual del sistema y stock
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-gray-600 hover:bg-gray-100">
            Mayo 2025
          </Button>
          <Button className="bg-orange-600 text-white hover:bg-orange-700">
            Exportar datos
          </Button>
        </div>
      </div>

      {/* Tarjetas de Información */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          title="Stock Total"
          value="24,580 kg"
          subtext="+2.5% desde el último mes"
          icon={<BarChart />}
          valueColor="text-orange-700"
        />
        <InfoCard
          title="En Proceso"
          value="8,245 kg"
          subtext="33.51% del stock total"
          icon={<HardHat />}
          valueColor="text-blue-700"
        />
        <InfoCard
          title="Listo para Exportar"
          value="12,350 kg"
          subtext="50.25% del stock total"
          icon={<FileText />}
          valueColor="text-green-700"
        />
        <InfoCard
          title="Alertas Activas"
          value="3"
          subtext="Requieren atención inmediata"
          icon={<AlertCircle />}
          valueColor="text-red-700"
        />
      </div>

      {/* Sección de Gráficos y Distribución */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Evolución del Stock */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Evolución del Stock</CardTitle>
              <div className="flex gap-2">
                <TabButton
                  label="Estado del Stock"
                  isActive={activeTab === "stock"}
                  onClick={() => setActiveTab("stock")}
                />
                <TabButton
                  label="Procesos Activos"
                  isActive={activeTab === "procesos"}
                  onClick={() => setActiveTab("procesos")}
                />
                <TabButton
                  label="Indicadores de Calidad"
                  isActive={activeTab === "calidad"}
                  onClick={() => setActiveTab("calidad")}
                />
              </div>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              {/* Aquí iría tu componente de gráfico. Por ahora es un placeholder. */}
              <div className="text-gray-400 p-6">[Gráfico de Ingresos/Egresos]</div>
            </CardContent>
          </Card>
        </div>

        {/* Distribución por Calibre */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Distribución por Calibre</CardTitle>
              <p className="text-sm text-gray-500">Porcentaje del stock total</p>
            </CardHeader>
            <CardContent>
              {/* Aquí irían tus barras de progreso o lista de calibres */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-800"></span>
                    <span>Extra Large (32-34)</span>
                  </div>
                  <span>28%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span>Large (30-32)</span>
                  </div>
                  <span>42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-300"></span>
                    <span>Medium (28-30)</span>
                  </div>
                  <span>22%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span>Small (&lt; 28)</span>
                  </div>
                  <span>8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}