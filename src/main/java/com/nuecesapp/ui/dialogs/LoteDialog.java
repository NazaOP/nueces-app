package com.nuecesapp.ui.dialogs;

import com.nuecesapp.model.Lote;
import com.nuecesapp.ui.components.ModernButton;
import com.nuecesapp.ui.components.ModernTextField;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Diálogo para crear/editar lotes
 */
public class LoteDialog extends JDialog {
    private ModernTextField idField;
    private ModernTextField origenField;
    private JSpinner cantidadSpinner;
    private JComboBox<String> variedadCombo;
    private JSpinner humedadSpinner;
    private ModernTextField colorField;
    private JSpinner calibreSpinner;
    private ModernTextField ubicacionField;
    
    private ModernButton guardarButton;
    private ModernButton cancelarButton;
    
    private Lote lote;
    private boolean confirmed = false;

    public LoteDialog(Frame parent, Lote lote) {
        super(parent, lote == null ? "Nuevo Lote" : "Editar Lote", true);
        this.lote = lote;
        
        initializeComponents();
        setupLayout();
        setupEventHandlers();
        
        if (lote != null) {
            loadLoteData();
        }
        
        setupDialog();
    }

    private void initializeComponents() {
        idField = new ModernTextField("ID del lote (ej: A2345)");
        origenField = new ModernTextField("Origen del lote");
        
        cantidadSpinner = new JSpinner(new SpinnerNumberModel(0.0, 0.0, 999999.0, 0.1));
        JSpinner.NumberEditor cantidadEditor = new JSpinner.NumberEditor(cantidadSpinner, "0.0");
        cantidadSpinner.setEditor(cantidadEditor);
        
        variedadCombo = new JComboBox<>(new String[]{"Chandler", "Franquette", "Howard", "Serr", "Tulare"});
        variedadCombo.setEditable(true);
        
        humedadSpinner = new JSpinner(new SpinnerNumberModel(0.0, 0.0, 100.0, 0.1));
        JSpinner.NumberEditor humedadEditor = new JSpinner.NumberEditor(humedadSpinner, "0.0");
        humedadSpinner.setEditor(humedadEditor);
        
        colorField = new ModernTextField("Color (ej: Ámbar Claro)");
        
        calibreSpinner = new JSpinner(new SpinnerNumberModel(0.0, 0.0, 100.0, 0.1));
        JSpinner.NumberEditor calibreEditor = new JSpinner.NumberEditor(calibreSpinner, "0.0");
        calibreSpinner.setEditor(calibreEditor);
        
        ubicacionField = new ModernTextField("Ubicación actual");
        
        guardarButton = new ModernButton("Guardar", new Color(34, 197, 94));
        cancelarButton = new ModernButton("Cancelar", new Color(107, 114, 128));
    }

    private void setupLayout() {
        setLayout(new BorderLayout());
        
        JPanel formPanel = new JPanel(new GridBagLayout());
        formPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(5, 5, 5, 5);
        gbc.anchor = GridBagConstraints.WEST;
        
        // ID
        gbc.gridx = 0; gbc.gridy = 0;
        formPanel.add(new JLabel("ID:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(idField, gbc);
        
        // Origen
        gbc.gridx = 0; gbc.gridy = 1; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Origen:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(origenField, gbc);
        
        // Cantidad
        gbc.gridx = 0; gbc.gridy = 2; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Cantidad (kg):"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(cantidadSpinner, gbc);
        
        // Variedad
        gbc.gridx = 0; gbc.gridy = 3; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Variedad:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(variedadCombo, gbc);
        
        // Humedad
        gbc.gridx = 0; gbc.gridy = 4; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Humedad (%):"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(humedadSpinner, gbc);
        
        // Color
        gbc.gridx = 0; gbc.gridy = 5; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Color:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(colorField, gbc);
        
        // Calibre
        gbc.gridx = 0; gbc.gridy = 6; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Calibre (mm):"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(calibreSpinner, gbc);
        
        // Ubicación
        gbc.gridx = 0; gbc.gridy = 7; gbc.fill = GridBagConstraints.NONE;
        formPanel.add(new JLabel("Ubicación:"), gbc);
        gbc.gridx = 1; gbc.fill = GridBagConstraints.HORIZONTAL;
        formPanel.add(ubicacionField, gbc);
        
        add(formPanel, BorderLayout.CENTER);
        
        // Panel de botones
        JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        buttonPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 20, 20));
        buttonPanel.add(cancelarButton);
        buttonPanel.add(guardarButton);
        
        add(buttonPanel, BorderLayout.SOUTH);
    }

    private void setupEventHandlers() {
        guardarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (validarCampos()) {
                    guardarLote();
                    confirmed = true;
                    dispose();
                }
            }
        });
        
        cancelarButton.addActionListener(e -> dispose());
    }

    private void loadLoteData() {
        if (lote != null) {
            idField.setText(lote.getId());
            idField.setEnabled(false); // No permitir cambiar ID en edición
            origenField.setText(lote.getOrigen());
            cantidadSpinner.setValue(lote.getCantidad());
            variedadCombo.setSelectedItem(lote.getVariedad());
            
            if (lote.getHumedadInicial() != null) {
                humedadSpinner.setValue(lote.getHumedadInicial());
            }
            if (lote.getColor() != null) {
                colorField.setText(lote.getColor());
            }
            if (lote.getCalibrePromedio() != null) {
                calibreSpinner.setValue(lote.getCalibrePromedio());
            }
            if (lote.getUbicacion() != null) {
                ubicacionField.setText(lote.getUbicacion());
            }
        }
    }

    private boolean validarCampos() {
        if (idField.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "El ID del lote es obligatorio", "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
        
        if (origenField.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "El origen del lote es obligatorio", "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
        
        if ((Double) cantidadSpinner.getValue() <= 0) {
            JOptionPane.showMessageDialog(this, "La cantidad debe ser mayor a 0", "Error", JOptionPane.ERROR_MESSAGE);
            return false;
        }
        
        return true;
    }

    private void guardarLote() {
        if (lote == null) {
            lote = new Lote();
        }
        
        lote.setId(idField.getText().trim());
        lote.setOrigen(origenField.getText().trim());
        lote.setCantidad((Double) cantidadSpinner.getValue());
        lote.setVariedad((String) variedadCombo.getSelectedItem());
        lote.setHumedadInicial((Double) humedadSpinner.getValue());
        lote.setHumedadActual((Double) humedadSpinner.getValue());
        lote.setColor(colorField.getText().trim());
        lote.setCalibrePromedio((Double) calibreSpinner.getValue());
        lote.setUbicacion(ubicacionField.getText().trim());
        
        if (lote.getEstado() == null) {
            lote.setEstado("recibido");
        }
    }

    private void setupDialog() {
        setSize(400, 500);
        setLocationRelativeTo(getParent());
        setResizable(false);
    }

    public boolean isConfirmed() {
        return confirmed;
    }

    public Lote getLote() {
        return lote;
    }
}
