package com.nuecesapp.service;

import com.nuecesapp.config.DatabaseConfig;
import com.nuecesapp.model.Lote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Servicio para gestión de lotes
 */
public class LoteService {
    private static final Logger logger = LoggerFactory.getLogger(LoteService.class);

    /**
     * Obtiene todos los lotes
     */
    public static List<Lote> obtenerTodosLosLotes() {
        List<Lote> lotes = new ArrayList<>();
        
        try (Connection conn = DatabaseConfig.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM lotes ORDER BY fecha_ingreso DESC")) {
            
            while (rs.next()) {
                lotes.add(mapResultSetToLote(rs));
            }
            
        } catch (SQLException e) {
            logger.error("Error al obtener lotes", e);
        }
        
        return lotes;
    }

    /**
     * Obtiene lotes filtrados por estado
     */
    public static List<Lote> obtenerLotesPorEstado(String estado) {
        List<Lote> lotes = new ArrayList<>();
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                 "SELECT * FROM lotes WHERE estado = ? ORDER BY fecha_ingreso DESC")) {
            
            stmt.setString(1, estado);
            ResultSet rs = stmt.executeQuery();
            
            while (rs.next()) {
                lotes.add(mapResultSetToLote(rs));
            }
            
        } catch (SQLException e) {
            logger.error("Error al obtener lotes por estado", e);
        }
        
        return lotes;
    }

    /**
     * Obtiene un lote por ID
     */
    public static Lote obtenerLotePorId(String id) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM lotes WHERE id = ?")) {
            
            stmt.setString(1, id);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                return mapResultSetToLote(rs);
            }
            
        } catch (SQLException e) {
            logger.error("Error al obtener lote por ID", e);
        }
        
        return null;
    }

    /**
     * Guarda un nuevo lote
     */
    public static boolean guardarLote(Lote lote) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                 "INSERT INTO lotes (id, origen, cantidad, variedad, estado, humedad_inicial, humedad_actual, color, calibre_promedio, proceso_actual, ubicacion, responsable, avance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
            
            stmt.setString(1, lote.getId());
            stmt.setString(2, lote.getOrigen());
            stmt.setDouble(3, lote.getCantidad());
            stmt.setString(4, lote.getVariedad());
            stmt.setString(5, lote.getEstado());
            stmt.setObject(6, lote.getHumedadInicial());
            stmt.setObject(7, lote.getHumedadActual());
            stmt.setString(8, lote.getColor());
            stmt.setObject(9, lote.getCalibrePromedio());
            stmt.setString(10, lote.getProcesoActual());
            stmt.setString(11, lote.getUbicacion());
            stmt.setString(12, lote.getResponsable());
            stmt.setInt(13, lote.getAvance());
            
            int rowsAffected = stmt.executeUpdate();
            
            if (rowsAffected > 0) {
                logger.info("Lote {} guardado correctamente", lote.getId());
                return true;
            }
            
        } catch (SQLException e) {
            logger.error("Error al guardar lote", e);
        }
        
        return false;
    }

    /**
     * Actualiza un lote existente
     */
    public static boolean actualizarLote(Lote lote) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                 "UPDATE lotes SET origen = ?, cantidad = ?, variedad = ?, estado = ?, humedad_inicial = ?, humedad_actual = ?, color = ?, calibre_promedio = ?, proceso_actual = ?, ubicacion = ?, responsable = ?, avance = ? WHERE id = ?")) {
            
            stmt.setString(1, lote.getOrigen());
            stmt.setDouble(2, lote.getCantidad());
            stmt.setString(3, lote.getVariedad());
            stmt.setString(4, lote.getEstado());
            stmt.setObject(5, lote.getHumedadInicial());
            stmt.setObject(6, lote.getHumedadActual());
            stmt.setString(7, lote.getColor());
            stmt.setObject(8, lote.getCalibrePromedio());
            stmt.setString(9, lote.getProcesoActual());
            stmt.setString(10, lote.getUbicacion());
            stmt.setString(11, lote.getResponsable());
            stmt.setInt(12, lote.getAvance());
            stmt.setString(13, lote.getId());
            
            int rowsAffected = stmt.executeUpdate();
            
            if (rowsAffected > 0) {
                logger.info("Lote {} actualizado correctamente", lote.getId());
                return true;
            }
            
        } catch (SQLException e) {
            logger.error("Error al actualizar lote", e);
        }
        
        return false;
    }

    /**
     * Elimina un lote
     */
    public static boolean eliminarLote(String id) {
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement("DELETE FROM lotes WHERE id = ?")) {
            
            stmt.setString(1, id);
            int rowsAffected = stmt.executeUpdate();
            
            if (rowsAffected > 0) {
                logger.info("Lote {} eliminado correctamente", id);
                return true;
            }
            
        } catch (SQLException e) {
            logger.error("Error al eliminar lote", e);
        }
        
        return false;
    }

    private static Lote mapResultSetToLote(ResultSet rs) throws SQLException {
        Lote lote = new Lote();
        lote.setId(rs.getString("id"));
        lote.setOrigen(rs.getString("origen"));
        lote.setFechaIngreso(rs.getTimestamp("fecha_ingreso").toLocalDateTime());
        lote.setCantidad(rs.getDouble("cantidad"));
        lote.setVariedad(rs.getString("variedad"));
        lote.setEstado(rs.getString("estado"));
        lote.setHumedadInicial(rs.getObject("humedad_inicial", Double.class));
        lote.setHumedadActual(rs.getObject("humedad_actual", Double.class));
        lote.setColor(rs.getString("color"));
        lote.setCalibrePromedio(rs.getObject("calibre_promedio", Double.class));
        lote.setProcesoActual(rs.getString("proceso_actual"));
        lote.setUbicacion(rs.getString("ubicacion"));
        lote.setResponsable(rs.getString("responsable"));
        lote.setAvance(rs.getInt("avance"));
        return lote;
    }
}
