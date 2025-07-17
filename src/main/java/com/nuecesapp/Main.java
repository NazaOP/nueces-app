package com.nuecesapp;

import com.formdev.flatlaf.FlatLightLaf;
import com.nuecesapp.config.DatabaseConfig;
import com.nuecesapp.ui.LoginFrame;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.swing.*;

/**
 * Clase principal de la aplicación NuecesApp
 * Sistema de Gestión de Stock para Producción y Procesamiento de Nueces
 */
public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        // Configurar Look and Feel
        try {
            UIManager.setLookAndFeel(new FlatLightLaf());
        } catch (Exception e) {
            logger.warn("No se pudo establecer FlatLaf, usando Look and Feel por defecto", e);
        }

        // Configurar propiedades del sistema
        System.setProperty("java.awt.headless", "false");
        
        // Ejecutar en el Event Dispatch Thread
        SwingUtilities.invokeLater(() -> {
            try {
                // Inicializar base de datos
                DatabaseConfig.initialize();
                
                // Crear y mostrar ventana de login
                LoginFrame loginFrame = new LoginFrame();
                loginFrame.setVisible(true);
                
                logger.info("NuecesApp iniciado correctamente");
            } catch (Exception e) {
                logger.error("Error al iniciar la aplicación", e);
                JOptionPane.showMessageDialog(null, 
                    "Error al iniciar la aplicación: " + e.getMessage(),
                    "Error", 
                    JOptionPane.ERROR_MESSAGE);
                System.exit(1);
            }
        });
    }
}
