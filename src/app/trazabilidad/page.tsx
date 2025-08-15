"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Download, FileBarChart, Filter, Printer, QrCode, Search, Share2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function TrazabilidadPage() {
  const [selectedLote, setSelectedLote] = useState(null)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trazabilidad</h1>
          <p className="text-muted-foreground">Seguimiento y trazabilidad de lotes</p>
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
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar por ID de lote..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Origen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los orígenes</SelectItem>
            <SelectItem value="finca1">Finca Los Nogales</SelectItem>
            <SelectItem value="finca2">Finca San José</SelectItem>
            <SelectItem value="finca3">Finca El Paraíso</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="recibido">Recibido</SelectItem>
            <SelectItem value="proceso">En Proceso</SelectItem>
            <SelectItem value="terminado">Terminado</SelectItem>
            <SelectItem value="exportado">Exportado</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="lotes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="lotes">Lotes</TabsTrigger>
          <TabsTrigger value="procesos">Procesos</TabsTrigger>
          <TabsTrigger value="exportaciones">Exportaciones</TabsTrigger>
        </TabsList>
        <TabsContent value="lotes">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Registro de Lotes</CardTitle>
              <CardDescription>Historial completo de lotes en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Lote</TableHead>
                    <TableHead>Origen</TableHead>
                    <TableHead>Fecha Ingreso</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Variedad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className={selectedLote === "A2345" ? "bg-muted" : ""}
                    onClick={() => setSelectedLote("A2345")}
                  >
                    <TableCell className="font-medium">Lote #A2345</TableCell>
                    <TableCell>Finca Los Nogales</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>1,250 kg</TableCell>
                    <TableCell>Chandler</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <QrCode className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Código QR del Lote #A2345</DialogTitle>
                              <DialogDescription>
                                Escanee este código para acceder a la información completa del lote
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex justify-center p-6">
                              <div className="bg-white p-4 rounded-md">
                                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                                  <QrCode className="w-32 h-32 text-gray-800" />
                                </div>
                                <p className="text-center mt-2 text-sm font-medium">Lote #A2345</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon">
                          <FileBarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedLote === "B1278" ? "bg-muted" : ""}
                    onClick={() => setSelectedLote("B1278")}
                  >
                    <TableCell className="font-medium">Lote #B1278</TableCell>
                    <TableCell>Finca San José</TableCell>
                    <TableCell>10/05/2025</TableCell>
                    <TableCell>2,500 kg</TableCell>
                    <TableCell>Franquette</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Terminado</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <QrCode className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileBarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedLote === "C5432" ? "bg-muted" : ""}
                    onClick={() => setSelectedLote("C5432")}
                  >
                    <TableCell className="font-medium">Lote #C5432</TableCell>
                    <TableCell>Finca El Paraíso</TableCell>
                    <TableCell>18/05/2025</TableCell>
                    <TableCell>1,800 kg</TableCell>
                    <TableCell>Chandler</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-700">Iniciando</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <QrCode className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileBarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedLote === "D7890" ? "bg-muted" : ""}
                    onClick={() => setSelectedLote("D7890")}
                  >
                    <TableCell className="font-medium">Lote #D7890</TableCell>
                    <TableCell>Finca Los Nogales</TableCell>
                    <TableCell>05/05/2025</TableCell>
                    <TableCell>950 kg</TableCell>
                    <TableCell>Howard</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500">Exportado</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <QrCode className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileBarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className={selectedLote === "E6543" ? "bg-muted" : ""}
                    onClick={() => setSelectedLote("E6543")}
                  >
                    <TableCell className="font-medium">Lote #E6543</TableCell>
                    <TableCell>Finca San José</TableCell>
                    <TableCell>12/05/2025</TableCell>
                    <TableCell>2,100 kg</TableCell>
                    <TableCell>Franquette</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
                          <QrCode className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileBarChart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {selectedLote && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Detalle de Trazabilidad - Lote #{selectedLote}</CardTitle>
                <CardDescription>Historial completo de movimientos y procesos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Información General</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Origen:</span>
                        <span>Finca Los Nogales</span>
                        <span className="text-muted-foreground">Fecha Ingreso:</span>
                        <span>15/05/2025</span>
                        <span className="text-muted-foreground">Variedad:</span>
                        <span>Chandler</span>
                        <span className="text-muted-foreground">Cantidad:</span>
                        <span>1,250 kg</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Parámetros de Calidad</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Humedad Inicial:</span>
                        <span>18%</span>
                        <span className="text-muted-foreground">Humedad Actual:</span>
                        <span>12%</span>
                        <span className="text-muted-foreground">Color:</span>
                        <span>Ámbar Claro</span>
                        <span className="text-muted-foreground">Calibre Prom.:</span>
                        <span>32mm</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Estado Actual</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Proceso:</span>
                        <span>Secado</span>
                        <span className="text-muted-foreground">Ubicación:</span>
                        <span>Secador #2</span>
                        <span className="text-muted-foreground">Responsable:</span>
                        <span>María González</span>
                        <span className="text-muted-foreground">Avance:</span>
                        <span>65%</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Historial de Movimientos</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">Ingreso al sistema</p>
                          <p className="text-xs text-muted-foreground">15/05/2025 - 08:30 AM</p>
                          <p className="text-xs">
                            Recepción de 1,250 kg de nueces variedad Chandler desde Finca Los Nogales
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">Control de calidad inicial</p>
                          <p className="text-xs text-muted-foreground">15/05/2025 - 10:15 AM</p>
                          <p className="text-xs">Humedad: 18%, Calibre promedio: 32mm, Color: Ámbar claro</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">Inicio de proceso de secado</p>
                          <p className="text-xs text-muted-foreground">16/05/2025 - 09:00 AM</p>
                          <p className="text-xs">Traslado a Secador #2, Responsable: María González</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">Control intermedio</p>
                          <p className="text-xs text-muted-foreground">18/05/2025 - 14:30 PM</p>
                          <p className="text-xs">Humedad: 15%, Avance del proceso: 35%</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium">Control actual</p>
                          <p className="text-xs text-muted-foreground">20/05/2025 - 11:45 AM</p>
                          <p className="text-xs">Humedad: 12%, Avance del proceso: 65%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="procesos">
          <Card>
            <CardHeader>
              <CardTitle>Trazabilidad de Procesos</CardTitle>
              <CardDescription>Seguimiento de procesos por lote</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Proceso</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Lote</TableHead>
                    <TableHead>Fecha Inicio</TableHead>
                    <TableHead>Fecha Fin</TableHead>
                    <TableHead>Responsable</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-001</TableCell>
                    <TableCell>Secado</TableCell>
                    <TableCell>Lote #A2345</TableCell>
                    <TableCell>16/05/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>María González</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-002</TableCell>
                    <TableCell>Clasificación</TableCell>
                    <TableCell>Lote #B1278</TableCell>
                    <TableCell>12/05/2025</TableCell>
                    <TableCell>14/05/2025</TableCell>
                    <TableCell>Juan Pérez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-003</TableCell>
                    <TableCell>Pelado</TableCell>
                    <TableCell>Lote #C5432</TableCell>
                    <TableCell>21/05/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Carlos Méndez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-700">Iniciando</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-004</TableCell>
                    <TableCell>Empaque</TableCell>
                    <TableCell>Lote #D7890</TableCell>
                    <TableCell>08/05/2025</TableCell>
                    <TableCell>09/05/2025</TableCell>
                    <TableCell>Ana Rodríguez</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completado</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-005</TableCell>
                    <TableCell>Secado</TableCell>
                    <TableCell>Lote #E6543</TableCell>
                    <TableCell>14/05/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Roberto Sánchez</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Proceso</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="exportaciones">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Exportaciones</CardTitle>
              <CardDescription>Historial de exportaciones y documentación asociada</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Exportación</TableHead>
                    <TableHead>Lotes</TableHead>
                    <TableHead>Destino</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Documentos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">EXP-001</TableCell>
                    <TableCell>Lote #D7890</TableCell>
                    <TableCell>España</TableCell>
                    <TableCell>10/05/2025</TableCell>
                    <TableCell>950 kg</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Completada</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">EXP-002</TableCell>
                    <TableCell>Lote #B1278</TableCell>
                    <TableCell>Italia</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell>2,500 kg</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">En Tránsito</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileBarChart className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">EXP-003</TableCell>
                    <TableCell>Múltiples</TableCell>
                    <TableCell>Francia</TableCell>
                    <TableCell>25/05/2025</TableCell>
                    <TableCell>5,000 kg</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500">Programada</Badge>
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
    </div>
  )
}
