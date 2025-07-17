"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Datos de ejemplo para el gráfico
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generar valores aleatorios para simular datos
    const ingresos = Math.floor(Math.random() * 500) + 100
    const egresos = Math.floor(Math.random() * 300) + 50

    data.push({
      fecha: `${date.getDate()}/${date.getMonth() + 1}`,
      ingresos,
      egresos,
    })
  }

  return data
}

export default function StockChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ingresos" name="Ingresos (kg)" fill="#78350f" />
          <Bar dataKey="egresos" name="Egresos (kg)" fill="#d97706" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
