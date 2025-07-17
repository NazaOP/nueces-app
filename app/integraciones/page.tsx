"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertCircle,
  CheckCircle2,
  Download,
  ExternalLink,
  FileJson,
  FileText,
  Globe,
  Key,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Upload,
  X,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function IntegracionesPage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedTab, setSelectedTab] = useState("apis")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integraciones</h1>
          <p className="text-muted-foreground">Gestión de integraciones con sistemas externos</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualizar
          </Button>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                <Plus className="mr-2 h-4 w-4" />
                Nueva Integración
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Configurar Nueva Integración</DialogTitle>
                <DialogDescription>Complete la información para agregar una nueva integración</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nombre-integracion" className="text-right">
                    Nombre
                  </Label>
                  <Input id="nombre-integracion" placeholder="SENASA API" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tipo-integracion" className="text-right">
                    Tipo
                  </Label>
                  <Select>
                    <SelectTrigger id="tipo-integracion" className="col-span-3">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="api">API REST</SelectItem>
                      <SelectItem value="webhook">Webhook</SelectItem>
                      <SelectItem value="ftp">FTP/SFTP</SelectItem>
                      <SelectItem value="erp">ERP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="url-endpoint" className="text-right">
                    URL/Endpoint
                  </Label>
                  <Input id="url-endpoint" placeholder="https://api.ejemplo.com/v1" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="api-key" className="text-right">
                    API Key
                  </Label>
                  <Input id="api-key" type="password" placeholder="••••••••••••••••" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="descripcion" className="text-right">
                    Descripción
                  </Label>
                  <Textarea id="descripcion" placeholder="Descripción de la integración" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="activar-integracion" className="text-right">
                    Estado
                  </Label>
                  <div className="flex items-center space-x-2 col-span-3">
                    <Switch id="activar-integracion" defaultChecked />
                    <Label htmlFor="activar-integracion">Activar integración</Label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>
                  Cancelar
                </Button>
                <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => setOpenDialog(false)}>
                  Guardar Integración
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar integraciones..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="api">API REST</SelectItem>
            <SelectItem value="webhook">Webhook</SelectItem>
            <SelectItem value="ftp">FTP/SFTP</SelectItem>
            <SelectItem value="erp">ERP</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="active">Activo</SelectItem>
            <SelectItem value="inactive">Inactivo</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="apis" className="space-y-4" onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="apis">APIs</TabsTrigger>
          <TabsTrigger value="exportaciones">Exportaciones</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="apis">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Integraciones API</CardTitle>
              <CardDescription>Conexiones con sistemas externos vía API</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Última Sincronización</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">SENASA API</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell className="max-w-[200px] truncate">https://api.senasa.gob.ar/certificados/v1</TableCell>
                    <TableCell>21/05/2025 08:30</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Activo
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema Aduanas</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell className="max-w-[200px] truncate">https://aduanas.gov.ar/api/exportaciones</TableCell>
                    <TableCell>20/05/2025 14:15</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Activo
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ERP Empresarial</TableCell>
                    <TableCell>ERP</TableCell>
                    <TableCell className="max-w-[200px] truncate">https://erp.nuecesapp.com/api/integration</TableCell>
                    <TableCell>21/05/2025 10:00</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Activo
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Servicio Meteorológico</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell className="max-w-[200px] truncate">https://api.clima.gov.ar/datos</TableCell>
                    <TableCell>19/05/2025 23:45</TableCell>
                    <TableCell>
                      <Badge className="bg-red-500 flex items-center gap-1">
                        <X className="h-3 w-3" />
                        Error
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sistema Logística</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell className="max-w-[200px] truncate">https://logistica.transportes.com/api</TableCell>
                    <TableCell>18/05/2025 16:20</TableCell>
                    <TableCell>
                      <Badge className="bg-slate-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Inactivo
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {selectedTab === "apis" && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Detalles de API</CardTitle>
                <CardDescription>Configuración y documentación de APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Endpoints Disponibles</h3>
                      <div className="rounded-md border">
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">GET</Badge>
                              <span className="font-mono text-sm">/api/lotes</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">Obtener lista de lotes</p>
                        </div>
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">POST</Badge>
                              <span className="font-mono text-sm">/api/lotes</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">Crear nuevo lote</p>
                        </div>
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">PUT</Badge>
                              <span className="font-mono text-sm">/api/lotes/{"{id}"}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">Actualizar lote existente</p>
                        </div>
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">DELETE</Badge>
                              <span className="font-mono text-sm">/api/lotes/{"{id}"}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">Eliminar lote</p>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">GET</Badge>
                              <span className="font-mono text-sm">/api/sensores</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">Obtener datos de sensores</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Autenticación</h3>
                      <div className="rounded-md border p-4 space-y-4">
                        <div className="flex items-center gap-2">
                          <Key className="h-5 w-5 text-amber-700" />
                          <span className="font-medium">API Key Authentication</span>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="api-key-header">Header</Label>
                          <Input id="api-key-header" value="X-API-Key" readOnly />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="api-key-value">API Key</Label>
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                              Regenerar
                            </Button>
                          </div>
                          <div className="relative">
                            <Input id="api-key-value" type="password" value="••••••••••••••••••••••••••••••" readOnly />
                            <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Alert className="bg-amber-50 border-amber-200">
                          <AlertCircle className="h-4 w-4 text-amber-700" />
                          <AlertDescription className="text-amber-800">
                            Mantenga su API Key segura. No la comparta ni la incluya en código público.
                          </AlertDescription>
                        </Alert>
                      </div>
                      
                      <h3 className="text-lg font-medium mt-6">Documentación</h3>
                      <div className="rounded-md border p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-amber-700" />
                            <span>Documentación de API</span>
                          </div>
                          <Button variant="outline" size="sm" className="h-8">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Docs
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileJson className="h-5 w-5 text-amber-700" />
                            <span>Swagger / OpenAPI</span>
                          </div>
                          <Button variant="outline" size="sm" className="h-8">
                            <Download className="mr-2 h-4 w-4" />
                            Descargar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-amber-700" />
                            <span>Postman Collection</span>
                          </div>
                          <Button variant="outline" size="sm" className="h-8">
                            <Download className="mr-2 h-4 w-4" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="exportaciones">
          <Card>
            <CardHeader>
              <CardTitle>Integraciones de Exportación</CardTitle>
              <CardDescription>Conexiones con sistemas de aduana y exportación</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Destino</TableHead>
                    <TableHead>Última Sincronización</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sistema Aduanas</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell>Aduana Nacional</TableCell>
                    <TableCell>20/05/2025 14:15</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Activo
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Certificación SENASA</TableCell>
                    <TableCell>API REST</TableCell>
                    <TableCell>SENASA</TableCell>
                    <TableCell>21/05/2025 08:30</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Activo
                      </Badge>
                    </TableCell>
                    <TableCell\
