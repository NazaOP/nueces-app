"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CircleAlert, Droplets, Leaf, Package, Scale, Truck, Warehouse } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import StockChart from "@/components/stock-chart"
import RecentActivity from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Resumen del estado actual del sistema y stock</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Mayo 2025
          </Button>
          <Button variant="default" size="sm" className="bg-amber-700 hover:bg-amber-800">
            Exportar datos
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Total</CardTitle>
            <Warehouse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,580 kg</div>
            <p className="text-xs text-muted-foreground">+2.5% desde el último mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Proceso</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,245 kg</div>
            <p className="text-xs text-muted-foreground">33.5% del stock total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Listo para Exportar</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,350 kg</div>
            <p className="text-xs text-muted-foreground">50.2% del stock total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas Activas</CardTitle>
            <CircleAlert className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="stock" className="space-y-4">
        <TabsList>
          <TabsTrigger value="stock">Estado del Stock</TabsTrigger>
          <TabsTrigger value="procesos">Procesos Activos</TabsTrigger>
          <TabsTrigger value="calidad">Indicadores de Calidad</TabsTrigger>
        </TabsList>
        <TabsContent value="stock" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Evolución del Stock</CardTitle>
                <CardDescription>Últimos 30 días de movimientos</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <StockChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Distribución por Calibre</CardTitle>
                <CardDescription>Porcentaje del stock total</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-amber-900 mr-2" />
                        Extra Large (32-34)
                      </div>
                      <span className="font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-2 bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-amber-700 mr-2" />
                        Large (30-32)
                      </div>
                      <span className="font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2 bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-amber-500 mr-2" />
                        Medium (28-30)
                      </div>
                      <span className="font-medium">22%</span>
                    </div>
                    <Progress value={22} className="h-2 bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-amber-300 mr-2" />
                        Small (&lt; 28)
                      </div>
                      <span className="font-medium">8%</span>
                    </div>
                    <Progress value={8} className="h-2 bg-muted" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="procesos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Procesos en Curso</CardTitle>
                <CardDescription>Estado actual de los procesos activos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Secado Lote #A2345</p>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-blue-500" />
                        <span className="text-xs text-muted-foreground">Humedad: 12%</span>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">En Proceso</Badge>
                  </div>
                  <Progress value={65} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Clasificación Lote #B1278</p>
                      <div className="flex items-center gap-2">
                        <Scale className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-muted-foreground">Rendimiento: 92%</span>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Finalizado</Badge>
                  </div>
                  <Progress value={100} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Pelado Lote #C5432</p>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-amber-700" />
                        <span className="text-xs text-muted-foreground">Calidad: Alta</span>
                      </div>
                    </div>
                    <Badge className="bg-amber-700">Iniciando</Badge>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas operaciones registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="calidad" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Indicadores de Calidad</CardTitle>
              <CardDescription>Métricas de calidad del producto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Humedad Promedio</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">8.2%</div>
                    <Badge className="bg-green-500">Óptimo</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Rango ideal: 7-10%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Color Promedio</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">Ámbar Claro</div>
                    <Badge className="bg-green-500">Óptimo</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Escala: Extra Light - Light - Amber - Dark</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Rendimiento Promedio</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">44%</div>
                    <Badge className="bg-amber-500">Normal</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Rango esperado: 42-48%</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Defectos</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">2.3%</div>
                    <Badge className="bg-green-500">Bajo</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Límite aceptable: &lt; 5%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
