export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Ingreso de lote",
      details: "Lote #D7890 - 1,250 kg",
      user: "Carlos Méndez",
      time: "Hace 10 minutos",
    },
    {
      id: 2,
      action: "Finalización de secado",
      details: "Lote #A2345 - Humedad final: 8%",
      user: "María González",
      time: "Hace 45 minutos",
    },
    {
      id: 3,
      action: "Inicio de clasificación",
      details: "Lote #B1278 - 2,500 kg",
      user: "Juan Pérez",
      time: "Hace 2 horas",
    },
    {
      id: 4,
      action: "Exportación preparada",
      details: "Orden #XP123 - 5,000 kg",
      user: "Ana Rodríguez",
      time: "Hace 3 horas",
    },
    {
      id: 5,
      action: "Control de calidad",
      details: "Lote #C5432 - Aprobado",
      user: "Roberto Sánchez",
      time: "Hace 5 horas",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-2 pb-3 border-b last:border-0 last:pb-0">
          <div className="h-2 w-2 mt-2 rounded-full bg-amber-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium">{activity.action}</p>
            <p className="text-xs">{activity.details}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{activity.user}</span>
              <span>•</span>
              <span>{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
