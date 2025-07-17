package com.nuecesapp.model;

import java.time.LocalDateTime;

/**
 * Modelo de datos para Lote
 */
public class Lote {
    private String id;
    private String origen;
    private LocalDateTime fechaIngreso;
    private double cantidad;
    private String variedad;
    private String estado;
    private Double humedadInicial;
    private Double humedadActual;
    private String color;
    private Double calibrePromedio;
    private String procesoActual;
    private String ubicacion;
    private String responsable;
    private int avance;

    // Constructores
    public Lote() {}

    public Lote(String id, String origen, double cantidad, String variedad) {
        this.id = id;
        this.origen = origen;
        this.cantidad = cantidad;
        this.variedad = variedad;
        this.estado = "recibido";
        this.fechaIngreso = LocalDateTime.now();
        this.avance = 0;
    }

    // Getters y Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getOrigen() { return origen; }
    public void setOrigen(String origen) { this.origen = origen; }

    public LocalDateTime getFechaIngreso() { return fechaIngreso; }
    public void setFechaIngreso(LocalDateTime fechaIngreso) { this.fechaIngreso = fechaIngreso; }

    public double getCantidad() { return cantidad; }
    public void setCantidad(double cantidad) { this.cantidad = cantidad; }

    public String getVariedad() { return variedad; }
    public void setVariedad(String variedad) { this.variedad = variedad; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Double getHumedadInicial() { return humedadInicial; }
    public void setHumedadInicial(Double humedadInicial) { this.humedadInicial = humedadInicial; }

    public Double getHumedadActual() { return humedadActual; }
    public void setHumedadActual(Double humedadActual) { this.humedadActual = humedadActual; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public Double getCalibrePromedio() { return calibrePromedio; }
    public void setCalibrePromedio(Double calibrePromedio) { this.calibrePromedio = calibrePromedio; }

    public String getProcesoActual() { return procesoActual; }
    public void setProcesoActual(String procesoActual) { this.procesoActual = procesoActual; }

    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }

    public String getResponsable() { return responsable; }
    public void setResponsable(String responsable) { this.responsable = responsable; }

    public int getAvance() { return avance; }
    public void setAvance(int avance) { this.avance = avance; }

    @Override
    public String toString() {
        return String.format("Lote %s - %s (%.1f kg)", id, variedad, cantidad);
    }
}
