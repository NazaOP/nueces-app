package com.nuecesapp.ui.panels;

import javax.swing.*;
import java.awt.*;

/**
 * Panel de trazabilidad
 */
public class TrazabilidadPanel extends JPanel {
    
    public TrazabilidadPanel() {
        initializeComponents();
        setupLayout();
    }

    private void initializeComponents() {
        // Implementación pendiente
    }

    private void setupLayout() {
        setLayout(new BorderLayout());
        setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        JLabel titleLabel = new JLabel("Trazabilidad");
        titleLabel.setFont(new Font("SansSerif", Font.BOLD, 24));
        add(titleLabel, BorderLayout.NORTH);

        JLabel placeholderLabel = new JLabel("Panel de trazabilidad en desarrollo", SwingConstants.CENTER);
        placeholderLabel.setFont(new Font("SansSerif", Font.PLAIN, 16));
        placeholderLabel.setForeground(Color.GRAY);
        add(placeholderLabel, BorderLayout.CENTER);
    }
}
