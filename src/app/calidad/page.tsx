"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Calendar,
  Check,
  CheckCircle2,
  Download,
  FileBarChart,
  Filter,
  Plus,
  Search,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

export default function CalidadPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Control de Calidad</h1>
          <p className="text-muted-foreground">Gestión de calidad y auditoría</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Control
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Registrar Control de Calidad</DialogTitle>
                <DialogDescription>
                  Complete la información para registrar un nuevo control de calidad
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lote" className="text-right">
                    Lote
                  </Label>
                  <Select defaultValue="a2345">
                    <SelectTrigger id="lote" className="col-span-3">
                      <SelectValue placeholder="Seleccionar lote" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a2345">Lote #A2345</SelectItem>
                      <SelectItem value="b1278">Lote #B1278</SelectItem>
                      <SelectItem value="c5432">Lote #C5432</SelectItem>
                      <SelectItem value="d7890">Lote #D7890</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tipo-control" className="text-right">
                    Tipo
                  </Label>
                  <Select defaultValue="humedad">
                    <SelectTrigger id="tipo-control" className="col-span-3">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="humedad">Control de Humedad</SelectItem>
                      <SelectItem value="color">Control de Color</SelectItem>
                      <SelectItem value="calibre">Control de Calibre</SelectItem>
                      <SelectItem value="defectos">Control de Defectos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="humedad" className="text-right">
                    Humedad (%)
                  </Label>
                  <div className="col-span-3 flex items-center gap-4">
                    <Slider id="humedad" defaultValue={[12]} max={30} step={0.1} className="flex-1" />
                    <span className="w-12 text-center">12%</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="responsable" className="text-right">
                    Responsable
                  </Label>
                  <Select defaultValue="roberto">
                    <SelectTrigger id="responsable" className="col-span-3">
                      <SelectValue placeholder="Seleccionar responsable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="juan">Juan Pérez</SelectItem>
                      <SelectItem value="maria">María González</SelectItem>
                      <SelectItem value="carlos">Carlos Méndez</SelectItem>
                      <SelectItem value="roberto">Roberto Sánchez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="observaciones" className="text-right">
                    Observaciones
                  </Label>
                  <Textarea id="observaciones" placeholder="Ingrese observaciones adicionales" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => setOpenDialog(false)}>
                  Guardar Control
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar controles..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Control" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="humedad">Humedad</SelectItem>
            <SelectItem value="color">Color</SelectItem>
            <SelectItem value="calibre">Calibre</SelectItem>
            <SelectItem value="defectos">Defectos</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="controles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="controles">Controles</TabsTrigger>
          <TabsTrigger value="parametros">Parámetros</TabsTrigger>
          <TabsTrigger value="alertas">Alertas</TabsTrigger>
          <TabsTrigger value="auditorias">Auditorías</TabsTrigger>
        </TabsList>
        <TabsContent value="controles">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Registro de Controles de Calidad</CardTitle>
              <CardDescription>Historial de controles realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Control</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Responsable</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">CC-001</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Aceptable</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CC-002</TableCell>
                    <TableCell>Lote #B1278</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>12/05/2025</TableCell>
                    <TableCell>Ámbar Claro</TableCell>
                    <TableCell>María González</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Óptimo</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CC-003</TableCell>
                    <TableCell>Lote #C5432</TableCell>
                    <TableCell>Calibre</TableCell>
                    <TableCell>18/05/2025</TableCell>
                    <TableCell>32mm</TableCell>
                    <TableCell>Juan Pérez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Óptimo</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CC-004</TableCell>
                    <TableCell>Lote #D7890</TableCell>
                    <TableCell>Defectos</TableCell>
                    <TableCell>08/05/2025</TableCell>
                    <TableCell>2.3%</TableCell>
                    <TableCell>Carlos Méndez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Óptimo</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CC-005</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>18/05/2025</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Aceptable</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CC-006</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>Humedad</TableCell>
                    <TableCell>20/05/2025</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Óptimo</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="parametros">
          <Card>
            <CardHeader>
              <CardTitle>Parámetros de Calidad</CardTitle>
              <CardDescription>Configuración de parámetros y rangos aceptables</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parámetro</TableHead>
                    <TableHead>Rango Óptimo</TableHead>
                    <TableHead>Rango Aceptable</TableHead>
                    <TableHead>Rango Crítico</TableHead>
                    <TableHead>Unidad</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Humedad</TableCell>
                    <TableCell>7-10%</TableCell>
                    <TableCell>10-18%</TableCell>
                    <TableCell>{">"} 18%</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Calibre</TableCell>
                    <TableCell>30-34mm</TableCell>
                    <TableCell>28-30mm</TableCell>
                    <TableCell>{"<"} 28mm</TableCell>
                    <TableCell>mm</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Defectos</TableCell>
                    <TableCell>0-2%</TableCell>
                    <TableCell>2-5%</TableCell>
                    <TableCell>{">"} 5%</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rendimiento</TableCell>
                    <TableCell>45-48%</TableCell>
                    <TableCell>42-45%</TableCell>
                    <TableCell>{"<"} 42%</TableCell>
                    <TableCell>%</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
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
              <CardTitle>Alertas de Calidad</CardTitle>
              <CardDescription>Alertas activas que requieren atención</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4 bg-red-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Alerta de Humedad Alta</h4>
                        <Badge className="bg-red-500">Crítico</Badge>
                      </div>
                      <p className="text-sm">
                        El lote #E6543 presenta una humedad de 20%, por encima del rango aceptable (18%).
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 19/05/2025 - 10:30 AM</span>
                        <span>•</span>
                        <span>Responsable: Roberto Sánchez</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Marcar como resuelta
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileBarChart className="mr-2 h-4 w-4" />
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-amber-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Alerta de Calibre Bajo</h4>
                        <Badge className="bg-amber-500">Advertencia</Badge>
                      </div>
                      <p className="text-sm">El lote #C5432 presenta un 15% de nueces con calibre inferior a 28mm.</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 18/05/2025 - 14:45 PM</span>
                        <span>•</span>
                        <span>Responsable: Juan Pérez</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Marcar como resuelta
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileBarChart className="mr-2 h-4 w-4" />
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4 bg-amber-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Alerta de Rendimiento Bajo</h4>
                        <Badge className="bg-amber-500">Advertencia</Badge>
                      </div>
                      <p className="text-sm">
                        El lote #B1278 presenta un rendimiento estimado de 41%, por debajo del rango aceptable.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Detectado: 17/05/2025 - 09:15 AM</span>
                        <span>•</span>
                        <span>Responsable: María González</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Marcar como resuelta
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileBarChart className="mr-2 h-4 w-4" />
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="auditorias">
          <Card>
            <CardHeader>
              <CardTitle>Auditorías de Calidad</CardTitle>
              <CardDescription>Registro de auditorías internas y externas</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Auditoría</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Auditor</TableHead>
                    <TableHead>Alcance</TableHead>
                    <TableHead>Resultado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">AUD-001</TableCell>
                    <TableCell>Interna</TableCell>
                    <TableCell>10/05/2025</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>Procesos de Secado</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Aprobada</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AUD-002</TableCell>
                    <TableCell>Externa</TableCell>
                    <TableCell>05/05/2025</TableCell>
                    <TableCell>SENASA</TableCell>
                    <TableCell>Instalaciones</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Aprobada</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AUD-003</TableCell>
                    <TableCell>Interna</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>María González</TableCell>
                    <TableCell>Procesos de Clasificación</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-500" />
                        <span>Con Observaciones</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AUD-004</TableCell>
                    <TableCell>Externa</TableCell>
                    <TableCell>20/03/2025</TableCell>
                    <TableCell>ISO 9001</TableCell>
                    <TableCell>Sistema Completo</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Certificada</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Métricas de Calidad</CardTitle>
          <CardDescription>Indicadores clave de calidad por lote</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Humedad Promedio</h4>
                <span className="text-sm font-medium">8.2%</span>
              </div>
              <Progress value={27} className="h-2" />
              <p className="text-xs text-muted-foreground">Rango óptimo: 7-10% (27% del rango total)</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Calibre Promedio</h4>
                <span className="text-sm font-medium">32mm</span>
              </div>
              <Progress value={80} className="h-2" />
              <p className="text-xs text-muted-foreground">Rango óptimo: 30-34mm (80% del rango)</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Defectos</h4>
                <span className="text-sm font-medium">2.3%</span>
              </div>
              <Progress value={46} className="h-2" />
              <p className="text-xs text-muted-foreground">Rango aceptable: 2-5% (46% del rango)</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Rendimiento</h4>
                <span className="text-sm font-medium">44%</span>
              </div>
              <Progress value={33} className="h-2" />
              <p className="text-xs text-muted-foreground">Rango aceptable: 42-48% (33% del rango)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
