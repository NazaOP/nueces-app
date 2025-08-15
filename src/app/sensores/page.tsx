"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  AlertTriangle,
  Battery,
  Calendar,
  Download,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Thermometer,
  Droplets,
  Wind,
  Wifi,
  WifiOff,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SensorChart from "@/components/sensor-chart"

export default function SensoresPage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedSensor, setSelectedSensor] = useState(null)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sensores IoT</h1>
          <p className="text-muted-foreground">Monitoreo y configuración de sensores</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Sensor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Registrar Nuevo Sensor</DialogTitle>
                <DialogDescription>Complete la información para agregar un nuevo sensor al sistema</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nombre-sensor" className="text-right">
                    Nombre
                  </Label>
                  <Input id="nombre-sensor" placeholder="Sensor de Humedad #5" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tipo-sensor" className="text-right">
                    Tipo
                  </Label>
                  <Select defaultValue="humedad">
                    <SelectTrigger id="tipo-sensor" className="col-span-3">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="humedad">Humedad</SelectItem>
                      <SelectItem value="temperatura">Temperatura</SelectItem>
                      <SelectItem value="presion">Presión</SelectItem>
                      <SelectItem value="viento">Velocidad del viento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ubicacion" className="text-right">
                    Ubicación
                  </Label>
                  <Select defaultValue="secador2">
                    <SelectTrigger id="ubicacion" className="col-span-3">
                      <SelectValue placeholder="Seleccionar ubicación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secador1">Secador #1</SelectItem>
                      <SelectItem value="secador2">Secador #2</SelectItem>
                      <SelectItem value="almacen">Almacén</SelectItem>
                      <SelectItem value="exterior">Exterior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="intervalo" className="text-right">
                    Intervalo (min)
                  </Label>
                  <Input id="intervalo" type="number" defaultValue="15" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="umbral-alerta" className="text-right">
                    Umbral de Alerta
                  </Label>
                  <Input id="umbral-alerta" type="number" defaultValue="18" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="activar-alertas" className="text-right">
                    Activar Alertas
                  </Label>
                  <div className="flex items-center space-x-2 col-span-3">
                    <Switch id="activar-alertas" defaultChecked />
                    <Label htmlFor="activar-alertas">Enviar notificaciones</Label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => setOpenDialog(false)}>
                  Guardar Sensor
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar sensores..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Sensor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="humedad">Humedad</SelectItem>
            <SelectItem value="temperatura">Temperatura</SelectItem>
            <SelectItem value="presion">Presión</SelectItem>
            <SelectItem value="viento">Velocidad del viento</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="online">En línea</SelectItem>
            <SelectItem value="offline">Fuera de línea</SelectItem>
            <SelectItem value="alerta">En alerta</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="sensores" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sensores">Sensores</TabsTrigger>
          <TabsTrigger value="lecturas">Lecturas</TabsTrigger>
          <TabsTrigger value="alertas">Alertas</TabsTrigger>
          <TabsTrigger value="configuracion">Configuración</TabsTrigger>
        </TabsList>
        <TabsContent value="sensores">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Sensores Registrados</CardTitle>
              <CardDescription>Lista de sensores IoT conectados al sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Última Lectura</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Batería</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className={selectedSensor === "S001" ? "bg-muted" : ""}
                    onClick={() => setSelectedSensor("S001")}
                  >
                    <TableCell className="font-medium">S001</TableCell>
                    <TableCell>Sensor Humedad #1</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      Humedad
                    </TableCell>
                    <TableCell>Secador #1</TableCell>
                    <TableCell>21/05/2025 10:15</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Battery className="h-4 w-4 text-green-500" />
                      85%
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center gap-1 bg-green-500">
                        <Wifi className="h-3 w-3" />
                        En línea
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedSensor === "S002" ? "bg-muted" : ""}
                    onClick={() => setSelectedSensor("S002")}
                  >
                    <TableCell className="font-medium">S002</TableCell>
                    <TableCell>Sensor Temperatura #1</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      Temperatura
                    </TableCell>
                    <TableCell>Secador #1</TableCell>
                    <TableCell>21/05/2025 10:15</TableCell>
                    <TableCell>28°C</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Battery className="h-4 w-4 text-amber-500" />
                      45%
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center gap-1 bg-green-500">
                        <Wifi className="h-3 w-3" />
                        En línea
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedSensor === "S003" ? "bg-muted" : ""}
                    onClick={() => setSelectedSensor("S003")}
                  >
                    <TableCell className="font-medium">S003</TableCell>
                    <TableCell>Sensor Humedad #2</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      Humedad
                    </TableCell>
                    <TableCell>Secador #2</TableCell>
                    <TableCell>21/05/2025 10:00</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Battery className="h-4 w-4 text-green-500" />
                      92%
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center gap-1 bg-amber-500">
                        <AlertTriangle className="h-3 w-3" />
                        Alerta
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedSensor === "S004" ? "bg-muted" : ""}
                    onClick={() => setSelectedSensor("S004")}
                  >
                    <TableCell className="font-medium">S004</TableCell>
                    <TableCell>Sensor Viento #1</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Wind className="h-4 w-4 text-cyan-500" />
                      Viento
                    </TableCell>
                    <TableCell>Exterior</TableCell>
                    <TableCell>21/05/2025 09:45</TableCell>
                    <TableCell>12 km/h</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Battery className="h-4 w-4 text-red-500" />
                      15%
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center gap-1 bg-green-500">
                        <Wifi className="h-3 w-3" />
                        En línea
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedSensor === "S005" ? "bg-muted" : ""}
                    onClick={() => setSelectedSensor("S005")}
                  >
                    <TableCell className="font-medium">S005</TableCell>
                    <TableCell>Sensor Temperatura #2</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      Temperatura
                    </TableCell>
                    <TableCell>Almacén</TableCell>
                    <TableCell>20/05/2025 18:30</TableCell>
                    <TableCell>22°C</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Battery className="h-4 w-4 text-green-500" />
                      78%
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center gap-1 bg-slate-500">
                        <WifiOff className="h-3 w-3" />
                        Fuera de línea
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {selectedSensor && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Historial de Lecturas - Sensor #{selectedSensor}</CardTitle>
                <CardDescription>Últimas 24 horas de lecturas registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <SensorChart sensorId={selectedSensor} />
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="lecturas">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Lecturas</CardTitle>
              <CardDescription>Historial de lecturas de todos los sensores</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Lectura</TableHead>
                    <TableHead>Sensor</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Fecha y Hora</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">L00125</TableCell>
                    <TableCell>Sensor Humedad #1</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>21/05/2025 10:15</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00124</TableCell>
                    <TableCell>Sensor Temperatura #1</TableCell>
                    <TableCell>Temperatura</TableCell>
                    <TableCell>21/05/2025 10:15</TableCell>
                    <TableCell>28°C</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00123</TableCell>
                    <TableCell>Sensor Humedad #2</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>21/05/2025 10:00</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Alerta</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00122</TableCell>
                    <TableCell>Sensor Viento #1</TableCell>
                    <TableCell>Viento</TableCell>
                    <TableCell>21/05/2025 09:45</TableCell>
                    <TableCell>12 km/h</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00121</TableCell>
                    <TableCell>Sensor Humedad #1</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>21/05/2025 09:45</TableCell>
                    <TableCell>12.5%</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00120</TableCell>
                    <TableCell>Sensor Temperatura #1</TableCell>
                    <TableCell>Temperatura</TableCell>
                    <TableCell>21/05/2025 09:45</TableCell>
                    <TableCell>27.8°C</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00119</TableCell>
                    <TableCell>Sensor Humedad #2</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>21/05/2025 09:30</TableCell>
                    <TableCell>14.8%</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">L00118</TableCell>
                    <TableCell>Sensor Temperatura #2</TableCell>
                    <TableCell>Temperatura</TableCell>
                    <TableCell>20/05/2025 18:30</TableCell>
                    <TableCell>22°C</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Normal</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alertas">
          <Card>
            <CardHeader>
              <CardTitle>Alertas de Sensores</CardTitle>
              <CardDescription>Alertas generadas por los sensores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4 bg-amber-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Alerta de Humedad Alta</h4>
                        <Badge className="bg-amber-500">Advertencia</Badge>
                      </div>
                      <p className="text-sm">
                        El Sensor Humedad #2 (S003) ha registrado un valor de 15%, por encima del umbral configurado
                        (14%).
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 21/05/2025 - 10:00 AM</span>
                        <span>•</span>
                        <span>Ubicación: Secador #2</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Settings className="mr-2 h-4 w-4" />
                          Ajustar umbral
                        </Button>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Verificar sensor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-red-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Alerta de Batería Baja</h4>
                        <Badge className="bg-red-500">Crítico</Badge>
                      </div>
                      <p className="text-sm">
                        El Sensor Viento #1 (S004) tiene un nivel de batería crítico (15%). Se recomienda reemplazar la
                        batería lo antes posible.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 21/05/2025 - 09:45 AM</span>
                        <span>•</span>
                        <span>Ubicación: Exterior</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Settings className="mr-2 h-4 w-4" />
                          Marcar para mantenimiento
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-slate-50">
                  <div className="flex items-start gap-4">
                    <WifiOff className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Sensor Fuera de Línea</h4>
                        <Badge className="bg-slate-500">Desconectado</Badge>
                      </div>
                      <p className="text-sm">
                        El Sensor Temperatura #2 (S005) está fuera de línea desde hace 15 horas. Se recomienda verificar
                        la conexión.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 20/05/2025 - 18:30 PM</span>
                        <span>•</span>
                        <span>Ubicación: Almacén</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Intentar reconexión
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="mr-2 h-4 w-4" />
                          Marcar para revisión
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="configuracion">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Sensores</CardTitle>
              <CardDescription>Ajustes generales para todos los sensores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Parámetros Generales</h3>

                    <div className="space-y-2">
                      <Label htmlFor="intervalo-global">Intervalo de Lectura Global (minutos)</Label>
                      <Input id="intervalo-global" type="number" defaultValue="15" />
                      <p className="text-xs text-muted-foreground">
                        Este valor se aplicará a todos los sensores que no tengan un intervalo personalizado.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tiempo-offline">Tiempo para considerar Offline (minutos)</Label>
                      <Input id="tiempo-offline" type="number" defaultValue="30" />
                      <p className="text-xs text-muted-foreground">
                        Tiempo sin comunicación para considerar que un sensor está fuera de línea.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bateria-critica">Nivel de Batería Crítico (%)</Label>
                      <Input id="bateria-critica" type="number" defaultValue="20" />
                      <p className="text-xs text-muted-foreground">
                        Porcentaje de batería para generar alertas críticas.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificaciones</h3>

                    <div className="flex items-center space-x-2">
                      <Switch id="alertas-email" defaultChecked />
                      <Label htmlFor="alertas-email">Enviar alertas por correo electrónico</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="alertas-sistema" defaultChecked />
                      <Label htmlFor="alertas-sistema">Mostrar alertas en el sistema</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="alertas-sms" />
                      <Label htmlFor="alertas-sms">Enviar alertas por SMS</Label>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="destinatarios">Destinatarios de Alertas</Label>
                      <Input id="destinatarios" placeholder="email1@ejemplo.com, email2@ejemplo.com" />
                      <p className="text-xs text-muted-foreground">Separe múltiples direcciones de correo con comas.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Umbrales por Defecto</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="umbral-humedad">Humedad (%)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="umbral-humedad-min" className="text-xs">
                            Mínimo
                          </Label>
                          <Input id="umbral-humedad-min" type="number" defaultValue="7" />
                        </div>
                        <div>
                          <Label htmlFor="umbral-humedad-max" className="text-xs">
                            Máximo
                          </Label>
                          <Input id="umbral-humedad-max" type="number" defaultValue="14" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="umbral-temperatura">Temperatura (°C)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="umbral-temperatura-min" className="text-xs">
                            Mínimo
                          </Label>
                          <Input id="umbral-temperatura-min" type="number" defaultValue="18" />
                        </div>
                        <div>
                          <Label htmlFor="umbral-temperatura-max" className="text-xs">
                            Máximo
                          </Label>
                          <Input id="umbral-temperatura-max" type="number" defaultValue="30" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="umbral-viento">Viento (km/h)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="umbral-viento-min" className="text-xs">
                            Mínimo
                          </Label>
                          <Input id="umbral-viento-min" type="number" defaultValue="0" />
                        </div>
                        <div>
                          <Label htmlFor="umbral-viento-max" className="text-xs">
                            Máximo
                          </Label>
                          <Input id="umbral-viento-max" type="number" defaultValue="25" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="umbral-presion">Presión (hPa)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label htmlFor="umbral-presion-min" className="text-xs">
                            Mínimo
                          </Label>
                          <Input id="umbral-presion-min" type="number" defaultValue="980" />
                        </div>
                        <div>
                          <Label htmlFor="umbral-presion-max" className="text-xs">
                            Máximo
                          </Label>
                          <Input id="umbral-presion-max" type="number" defaultValue="1030" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-amber-700 hover:bg-amber-800">Guardar Configuración</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
