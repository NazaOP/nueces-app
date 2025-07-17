package com.nuecesapp.ui.panels;

import com.nuecesapp.service.LoteService;
import com.nuecesapp.model.Lote;

import javax.swing.*;
import java.awt.*;
import java.util.List;

/**
 * Panel del dashboard principal
 */
public class DashboardPanel extends JPanel {
    private JLabel stockTotalLabel;
    private JLabel enProcesoLabel;
    private JLabel listoExportarLabel;
    private JLabel alertasActivasLabel;

    public DashboardPanel() {
        initializeComponents();
        setupLayout();
        loadData();
    }

    private void initializeComponents() {
        stockTotalLabel = new JLabel("0 kg");
        enProcesoLabel = new JLabel("0 kg");
        listoExportarLabel = new JLabel("0 kg");
        alertasActivasLabel = new JLabel("0");
    }

    private void setupLayout() {
        setLayout(new BorderLayout());
        setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // Panel de título
        JPanel titlePanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        JLabel titleLabel = new JLabel("Dashboard");
        titleLabel.setFont(new Font("SansSerif", Font.BOLD, 24));
        titlePanel.add(titleLabel);

        JLabel subtitleLabel = new JLabel("Resumen del estado actual del sistema y stock");
        subtitleLabel.setFont(new Font("SansSerif", Font.PLAIN, 14));
        subtitleLabel.setForeground(Color.GRAY);
        titlePanel.add(subtitleLabel);

        add(titlePanel, BorderLayout.NORTH);

        // Panel de métricas
        JPanel metricsPanel = new JPanel(new GridLayout(2, 2, 20, 20));
        metricsPanel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));

        // Tarjetas de métricas
        metricsPanel.add(createMetricCard("Stock Total", stockTotalLabel, "📦", new Color(59, 130, 246)));
        metricsPanel.add(createMetricCard("En Proceso", enProcesoLabel, "⚙️", new Color(245, 158, 11)));
        metricsPanel.add(createMetricCard("Listo para Exportar", listoExportarLabel, "🚚", new Color(34, 197, 94)));
        metricsPanel.add(createMetricCard("Alertas Activas", alertasActivasLabel, "⚠️", new Color(239, 68, 68)));

        add(metricsPanel, BorderLayout.CENTER);

        // Panel de información adicional
        JPanel infoPanel = new JPanel(new BorderLayout());
        infoPanel.setBorder(BorderFactory.createTitledBorder("Información del Sistema"));
        
        JTextArea infoArea = new JTextArea(5, 0);
        infoArea.setEditable(false);
        infoArea.setText("Sistema de Gestión de Stock para Producción y Procesamiento de Nueces\n" +
                        "Versión: 1.0.0\n" +
                        "Base de datos: SQLite\n" +
                        "Usuario actual: " + com.nuecesapp.service.AuthService.getUsuarioActual().getNombreCompleto());
        
        infoPanel.add(new JScrollPane(infoArea), BorderLayout.CENTER);
        add(infoPanel, BorderLayout.SOUTH);
    }

    private JPanel createMetricCard(String title, JLabel valueLabel, String icon, Color color) {
        JPanel card = new JPanel(new BorderLayout());
        card.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(color, 2),
            BorderFactory.createEmptyBorder(15, 15, 15, 15)
        ));
        card.setBackground(Color.WHITE);

        // Header con icono y título
        JPanel headerPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 0, 0));
        headerPanel.setBackground(Color.WHITE);
        
        JLabel iconLabel = new JLabel(icon);
        iconLabel.setFont(new Font("SansSerif", Font.PLAIN, 20));
        headerPanel.add(iconLabel);
        
        JLabel titleLabel = new JLabel("  " + title);
        titleLabel.setFont(new Font("SansSerif", Font.BOLD, 14));
        titleLabel.setForeground(color);
        headerPanel.add(titleLabel);

        card.add(headerPanel, BorderLayout.NORTH);

        // Valor
        valueLabel.setFont(new Font("SansSerif", Font.BOLD, 28));
        valueLabel.setForeground(Color.BLACK);
        valueLabel.setHorizontalAlignment(SwingConstants.CENTER);
        
        card.add(valueLabel, BorderLayout.CENTER);

        return card;
    }

    private void loadData() {
        SwingWorker<Void, Void> worker = new SwingWorker<Void, Void>() {
            @Override
            protected Void doInBackground() throws Exception {
                List<Lote> lotes = LoteService.obtenerTodosLosLotes();
                
                double stockTotal = lotes.stream().mapToDouble(Lote::getCantidad).sum();
                double enProceso = lotes.stream()
                    .filter(l -> "en_proceso".equals(l.getEstado()))
                    .mapToDouble(Lote::getCantidad).sum();
                double listoExportar = lotes.stream()
                    .filter(l -> "terminado".equals(l.getEstado()))
                    .mapToDouble(Lote::getCantidad).sum();
                
                SwingUtilities.invokeLater(() -> {
                    stockTotalLabel.setText(String.format("%.0f kg", stockTotal));
                    enProcesoLabel.setText(String.format("%.0f kg", enProceso));
                    listoExportarLabel.setText(String.format("%.0f kg", listoExportar));
                    alertasActivasLabel.setText("3"); // Simulado
                });
                
                return null;
            }
        };
        
        worker.execute();
    }

    public void refreshData() {
        loadData();
    }
}
