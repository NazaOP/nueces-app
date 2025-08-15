"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Función para generar datos de ejemplo para el gráfico
const generateSensorData = (sensorId) => {
  const data = []
  const now = new Date()

  // Determinar el tipo de sensor basado en el ID para generar datos apropiados
  let sensorType = "humedad"
  let unit = "%"
  let minValue = 7
  let maxValue = 18
  let color = "#3b82f6" // azul para humedad

  if (sensorId === "S002" || sensorId === "S005") {
    sensorType = "temperatura"
    unit = "°C"
    minValue = 18
    maxValue = 30
    color = "#ef4444" // rojo para temperatura
  } else if (sensorId === "S004") {
    sensorType = "viento"
    unit = "km/h"
    minValue = 0
    maxValue = 25
    color = "#06b6d4" // cyan para viento
  }

  // Generar 24 puntos de datos (uno por hora)
  for (let i = 23; i >= 0; i--) {
    const date = new Date(now)
    date.setHours(date.getHours() - i)

    // Generar un valor aleatorio dentro del rango apropiado
    let value

    if (i === 0 && sensorId === "S003" && sensorType === "humedad") {
      // Para el sensor S003 (que está en alerta), asegurar que el último valor sea alto
      value = 15
    } else {
      // Generar un valor aleatorio con tendencia (para que el gráfico sea más realista)
      const trend = Math.sin(i / 4) * ((maxValue - minValue) * 0.2)
      value = minValue + (maxValue - minValue) * 0.5 + trend + Math.random() * ((maxValue - minValue) * 0.2)
      value = Math.round(value * 10) / 10 // Redondear a 1 decimal
    }

    data.push({
      hora: `${date.getHours()}:00`,
      valor: value,
      unidad: unit,
      color: color,
    })
  }

  return { data, sensorType, unit, color }
}

export default function SensorChart({ sensorId }) {
  const [chartData, setChartData] = useState({ data: [], sensorType: "", unit: "", color: "" })

  useEffect(() => {
    if (sensorId) {
      setChartData(generateSensorData(sensorId))
    }
  }, [sensorId])

  if (!sensorId) {
    return <div className="flex items-center justify-center h-full">Seleccione un sensor para ver su historial</div>
  }

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hora" />
          <YAxis
            domain={[(dataMin) => Math.floor(dataMin * 0.9), (dataMax) => Math.ceil(dataMax * 1.1)]}
            label={{
              value: chartData.unit,
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            formatter={(value) => [`${value} ${chartData.unit}`, `Valor`]}
            labelFormatter={(label) => `Hora: ${label}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="valor"
            name={`${chartData.sensorType.charAt(0).toUpperCase() + chartData.sensorType.slice(1)}`}
            stroke={chartData.color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
