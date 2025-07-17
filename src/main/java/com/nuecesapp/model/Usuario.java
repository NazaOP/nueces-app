package com.nuecesapp.model;

import java.time.LocalDateTime;

/**
 * Modelo de datos para Usuario
 */
public class Usuario {
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String username;
    private String passwordHash;
    private String rol;
    private boolean activo;
    private LocalDateTime fechaCreacion;

    // Constructores
    public Usuario() {}

    public Usuario(String nombre, String apellido, String email, String username, String rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.rol = rol;
        this.activo = true;
        this.fechaCreacion = LocalDateTime.now();
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }

    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }

    public boolean isActivo() { return activo; }
    public void setActivo(boolean activo) { this.activo = activo; }

    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public void setFechaCreacion(LocalDateTime fechaCreacion) { this.fechaCreacion = fechaCreacion; }

    public String getNombreCompleto() {
        return nombre + " " + apellido;
    }

    @Override
    public String toString() {
        return getNombreCompleto() + " (" + username + ")";
    }
}
