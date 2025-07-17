package com.nuecesapp.service;

import com.nuecesapp.config.DatabaseConfig;
import com.nuecesapp.model.Usuario;
import org.mindrot.jbcrypt.BCrypt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Servicio de autenticación y gestión de usuarios
 */
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);
    private static Usuario usuarioActual;

    /**
     * Autentica un usuario con username y password
     */
    public static boolean login(String username, String password) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                 "SELECT * FROM usuarios WHERE username = ? AND activo = TRUE")) {
            
            stmt.setString(1, username);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                String passwordHash = rs.getString("password_hash");
                if (BCrypt.checkpw(password, passwordHash)) {
                    usuarioActual = mapResultSetToUsuario(rs);
                    logger.info("Usuario {} autenticado correctamente", username);
                    return true;
                }
            }
            
            logger.warn("Intento de login fallido para usuario: {}", username);
            return false;
            
        } catch (SQLException e) {
            logger.error("Error al autenticar usuario", e);
            return false;
        }
    }

    /**
     * Cierra la sesión del usuario actual
     */
    public static void logout() {
        if (usuarioActual != null) {
            logger.info("Usuario {} cerró sesión", usuarioActual.getUsername());
            usuarioActual = null;
        }
    }

    /**
     * Obtiene el usuario actualmente autenticado
     */
    public static Usuario getUsuarioActual() {
        return usuarioActual;
    }

    /**
     * Verifica si hay un usuario autenticado
     */
    public static boolean isAuthenticated() {
        return usuarioActual != null;
    }

    /**
     * Verifica si el usuario actual tiene un rol específico
     */
    public static boolean hasRole(String rol) {
        return usuarioActual != null && usuarioActual.getRol().equals(rol);
    }

    /**
     * Registra un nuevo usuario
     */
    public static boolean registrarUsuario(Usuario usuario, String password) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                 "INSERT INTO usuarios (nombre, apellido, email, username, password_hash, rol) VALUES (?, ?, ?, ?, ?, ?)")) {
            
            String passwordHash = BCrypt.hashpw(password, BCrypt.gensalt());
            
            stmt.setString(1, usuario.getNombre());
            stmt.setString(2, usuario.getApellido());
            stmt.setString(3, usuario.getEmail());
            stmt.setString(4, usuario.getUsername());
            stmt.setString(5, passwordHash);
            stmt.setString(6, usuario.getRol());
            
            int rowsAffected = stmt.executeUpdate();
            
            if (rowsAffected > 0) {
                logger.info("Usuario {} registrado correctamente", usuario.getUsername());
                return true;
            }
            
            return false;
            
        } catch (SQLException e) {
            logger.error("Error al registrar usuario", e);
            return false;
        }
    }

    private static Usuario mapResultSetToUsuario(ResultSet rs) throws SQLException {
        Usuario usuario = new Usuario();
        usuario.setId(rs.getLong("id"));
        usuario.setNombre(rs.getString("nombre"));
        usuario.setApellido(rs.getString("apellido"));
        usuario.setEmail(rs.getString("email"));
        usuario.setUsername(rs.getString("username"));
        usuario.setPasswordHash(rs.getString("password_hash"));
        usuario.setRol(rs.getString("rol"));
        usuario.setActivo(rs.getBoolean("activo"));
        usuario.setFechaCreacion(rs.getTimestamp("fecha_creacion").toLocalDateTime());
        return usuario;
    }
}
