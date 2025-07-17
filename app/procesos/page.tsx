"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, ClipboardList, Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"

export default function ProcesosPage() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Procesos</h1>
          <p className="text-muted-foreground">Gestión de procesos de producción</p>
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
                Nuevo Proceso
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Registrar Nuevo Proceso</DialogTitle>
                <DialogDescription>Complete la información para iniciar un nuevo proceso</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tipo-proceso" className="text-right">
                    Tipo
                  </Label>
                  <Select defaultValue="secado">
                    <SelectTrigger id="tipo-proceso" className="col-span-3">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secado">Secado</SelectItem>
                      <SelectItem value="pelado">Pelado</SelectItem>
                      <SelectItem value="clasificacion">Clasificación</SelectItem>
                      <SelectItem value="empaque">Empaque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                  <Label htmlFor="cantidad" className="text-right">
                    Cantidad (kg)
                  </Label>
                  <Input id="cantidad" type="number" defaultValue="1000" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="humedad" className="text-right">
                    Humedad (%)
                  </Label>
                  <div className="col-span-3 flex items-center gap-4">
                    <Slider id="humedad" defaultValue={[15]} max={30} step={0.1} className="flex-1" />
                    <span className="w-12 text-center">15%</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="responsable" className="text-right">
                    Responsable
                  </Label>
                  <Select defaultValue="juan">
                    <SelectTrigger id="responsable" className="col-span-3">
                      <SelectValue placeholder="Seleccionar responsable" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="juan">Juan Pérez</SelectItem>
                      <SelectItem value="maria">María González</SelectItem>
                      <SelectItem value="carlos">Carlos Méndez</SelectItem>
                      <SelectItem value="ana">Ana Rodríguez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => setOpenDialog(false)}>
                  Iniciar Proceso
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar procesos..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="active">En proceso</SelectItem>
            <SelectItem value="completed">Completados</SelectItem>
            <SelectItem value="pending">Pendientes</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="secado">Secado</TabsTrigger>
          <TabsTrigger value="pelado">Pelado</TabsTrigger>
          <TabsTrigger value="clasificacion">Clasificación</TabsTrigger>
          <TabsTrigger value="empaque">Empaque</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Procesos Activos</CardTitle>
              <CardDescription>Lista de todos los procesos registrados en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Inicio</TableHead>
                    <TableHead>Responsable</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-001</TableCell>
                    <TableCell>Secado</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>1,250 kg</TableCell>
                    <TableCell>20/05/2025</TableCell>
                    <TableCell>María González</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-002</TableCell>
                    <TableCell>Clasificación</TableCell>
                    <TableCell>Lote #B1278</TableCell>
                    <TableCell>2,500 kg</TableCell>
                    <TableCell>18/05/2025</TableCell>
                    <TableCell>Juan Pérez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-003</TableCell>
                    <TableCell>Pelado</TableCell>
                    <TableCell>Lote #C5432</TableCell>
                    <TableCell>1,800 kg</TableCell>
                    <TableCell>21/05/2025</TableCell>
                    <TableCell>Carlos Méndez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-700">Iniciando</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-004</TableCell>
                    <TableCell>Empaque</TableCell>
                    <TableCell>Lote #D7890</TableCell>
                    <TableCell>950 kg</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>Ana Rodríguez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-005</TableCell>
                    <TableCell>Secado</TableCell>
                    <TableCell>Lote #E6543</TableCell>
                    <TableCell>2,100 kg</TableCell>
                    <TableCell>19/05/2025</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="secado">
          <Card>
            <CardHeader>
              <CardTitle>Procesos de Secado</CardTitle>
              <CardDescription>Gestión de procesos de secado de nueces</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Humedad Inicial</TableHead>
                    <TableHead>Humedad Actual</TableHead>
                    <TableHead>Inicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-001</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>1,250 kg</TableCell>
                    <TableCell>18%</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell>20/05/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-005</TableCell>
                    <TableCell>Lote #E6543</TableCell>
                    <TableCell>2,100 kg</TableCell>
                    <TableCell>20%</TableCell>
                    <TableCell>14%</TableCell>
                    <TableCell>19/05/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pelado">
          <Card>
            <CardHeader>
              <CardTitle>Procesos de Pelado</CardTitle>
              <CardDescription>Gestión de procesos de pelado de nueces</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Rendimiento Est.</TableHead>
                    <TableHead>Inicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-003</TableCell>
                    <TableCell>Lote #C5432</TableCell>
                    <TableCell>1,800 kg</TableCell>
                    <TableCell>45%</TableCell>
                    <TableCell>21/05/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-700">Iniciando</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="clasificacion">
          <Card>
            <CardHeader>
              <CardTitle>Procesos de Clasificación</CardTitle>
              <CardDescription>Gestión de procesos de clasificación de nueces</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Criterio</TableHead>
                    <TableHead>Inicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-002</TableCell>
                    <TableCell>Lote #B1278</TableCell>
                    <TableCell>2,500 kg</TableCell>
                    <TableCell>Calibre</TableCell>
                    <TableCell>18/05/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="empaque">
          <Card>
            <CardHeader>
              <CardTitle>Procesos de Empaque</CardTitle>
              <CardDescription>Gestión de procesos de empaque de nueces</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Tipo Empaque</TableHead>
                    <TableHead>Inicio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-004</TableCell>
                    <TableCell>Lote #D7890</TableCell>
                    <TableCell>950 kg</TableCell>
                    <TableCell>Bolsas 25kg</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ClipboardList className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
