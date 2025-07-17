package com.nuecesapp.ui.panels;

import com.nuecesapp.model.Lote;
import com.nuecesapp.service.LoteService;
import com.nuecesapp.ui.components.ModernButton;
import com.nuecesapp.ui.dialogs.LoteDialog;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * Panel de gestión de lotes
 */
public class LotesPanel extends JPanel {
    private JTable lotesTable;
    private DefaultTableModel tableModel;
    private ModernButton nuevoLoteButton;
    private ModernButton editarLoteButton;
    private ModernButton eliminarLoteButton;
    private JComboBox<String> estadoFilter;

    public LotesPanel() {
        initializeComponents();
        setupLayout();
        setupEventHandlers();
        loadData();
    }

    private void initializeComponents() {
        // Tabla de lotes
        String[] columnNames = {"ID", "Origen", "Fecha Ingreso", "Cantidad (kg)", "Variedad", "Estado", "Proceso Actual", "Avance %"};
        tableModel = new DefaultTableModel(columnNames, 0) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }
        };
        
        lotesTable = new JTable(tableModel);
        lotesTable.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        lotesTable.setRowHeight(25);
        lotesTable.getTableHeader().setReorderingAllowed(false);

        // Botones
        nuevoLoteButton = new ModernButton("Nuevo Lote", new Color(34, 197, 94));
        editarLoteButton = new ModernButton("Editar", new Color(59, 130, 246));
        eliminarLoteButton = new ModernButton("Eliminar", new Color(239, 68, 68));

        // Filtros
        estadoFilter = new JComboBox<>(new String[]{"Todos", "recibido", "en_proceso", "terminado", "exportado"});
    }

    private void setupLayout() {
        setLayout(new BorderLayout());
        setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // Panel superior con título y controles
        JPanel topPanel = new JPanel(new BorderLayout());
        
        JPanel titlePanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        JLabel titleLabel = new JLabel("Gestión de Lotes");
        titleLabel.setFont(new Font("SansSerif", Font.BOLD, 24));
        titlePanel.add(titleLabel);
        
        JPanel controlsPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        controlsPanel.add(new JLabel("Estado:"));
        controlsPanel.add(estadoFilter);
        controlsPanel.add(Box.createHorizontalStrut(10));
        controlsPanel.add(nuevoLoteButton);
        controlsPanel.add(editarLoteButton);
        controlsPanel.add(eliminarLoteButton);
        
        topPanel.add(titlePanel, BorderLayout.WEST);
        topPanel.add(controlsPanel, BorderLayout.EAST);
        
        add(topPanel, BorderLayout.NORTH);

        // Tabla con scroll
        JScrollPane scrollPane = new JScrollPane(lotesTable);
        scrollPane.setBorder(BorderFactory.createTitledBorder("Lista de Lotes"));
        add(scrollPane, BorderLayout.CENTER);

        // Panel de información
        JPanel infoPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        infoPanel.add(new JLabel("Seleccione un lote para ver opciones de edición y eliminación"));
        add(infoPanel, BorderLayout.SOUTH);
    }

    private void setupEventHandlers() {
        nuevoLoteButton.addActionListener(e -> mostrarDialogoNuevoLote());
        editarLoteButton.addActionListener(e -> editarLoteSeleccionado());
        eliminarLoteButton.addActionListener(e -> eliminarLoteSeleccionado());
        
        estadoFilter.addActionListener(e -> filtrarPorEstado());
        
        lotesTable.getSelectionModel().addListSelectionListener(e -> {
            boolean hasSelection = lotesTable.getSelectedRow() != -1;
            editarLoteButton.setEnabled(hasSelection);
            eliminarLoteButton.setEnabled(hasSelection);
        });

        // Inicialmente deshabilitar botones de edición
        editarLoteButton.setEnabled(false);
        eliminarLoteButton.setEnabled(false);
    }

    private void mostrarDialogoNuevoLote() {
        LoteDialog dialog = new LoteDialog((Frame) SwingUtilities.getWindowAncestor(this), null);
        dialog.setVisible(true);
        
        if (dialog.isConfirmed()) {
            Lote nuevoLote = dialog.getLote();
            if (LoteService.guardarLote(nuevoLote)) {
                JOptionPane.showMessageDialog(this, "Lote guardado correctamente", "Éxito", JOptionPane.INFORMATION_MESSAGE);
                loadData();
            } else {
                JOptionPane.showMessageDialog(this, "Error al guardar el lote", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void editarLoteSeleccionado() {
        int selectedRow = lotesTable.getSelectedRow();
        if (selectedRow == -1) return;

        String loteId = (String) tableModel.getValueAt(selectedRow, 0);
        Lote lote = LoteService.obtenerLotePorId(loteId);
        
        if (lote != null) {
            LoteDialog dialog = new LoteDialog((Frame) SwingUtilities.getWindowAncestor(this), lote);
            dialog.setVisible(true);
            
            if (dialog.isConfirmed()) {
                Lote loteEditado = dialog.getLote();
                if (LoteService.actualizarLote(loteEditado)) {
                    JOptionPane.showMessageDialog(this, "Lote actualizado correctamente", "Éxito", JOptionPane.INFORMATION_MESSAGE);
                    loadData();
                } else {
                    JOptionPane.showMessageDialog(this, "Error al actualizar el lote", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        }
    }

    private void eliminarLoteSeleccionado() {
        int selectedRow = lotesTable.getSelectedRow();
        if (selectedRow == -1) return;

        String loteId = (String) tableModel.getValueAt(selectedRow, 0);
        
        int option = JOptionPane.showConfirmDialog(this,
            "¿Está seguro que desea eliminar el lote " + loteId + "?",
            "Confirmar Eliminación",
            JOptionPane.YES_NO_OPTION,
            JOptionPane.WARNING_MESSAGE);

        if (option == JOptionPane.YES_OPTION) {
            if (LoteService.eliminarLote(loteId)) {
                JOptionPane.showMessageDialog(this, "Lote eliminado correctamente", "Éxito", JOptionPane.INFORMATION_MESSAGE);
                loadData();
            } else {
                JOptionPane.showMessageDialog(this, "Error al eliminar el lote", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void filtrarPorEstado() {
        String estadoSeleccionado = (String) estadoFilter.getSelectedItem();
        loadData(estadoSeleccionado);
    }

    private void loadData() {
        loadData("Todos");
    }

    private void loadData(String filtroEstado) {
        SwingWorker<List<Lote>, Void> worker = new SwingWorker<List<Lote>, Void>() {
            @Override
            protected List<Lote> doInBackground() throws Exception {
                if ("Todos".equals(filtroEstado)) {
                    return LoteService.obtenerTodosLosLotes();
                } else {
                    return LoteService.obtenerLotesPorEstado(filtroEstado);
                }
            }

            @Override
            protected void done() {
                try {
                    List<Lote> lotes = get();
                    updateTable(lotes);
                } catch (Exception e) {
                    JOptionPane.showMessageDialog(LotesPanel.this, 
                        "Error al cargar los lotes: " + e.getMessage(), 
                        "Error", 
                        JOptionPane.ERROR_MESSAGE);
                }
            }
        };
        
        worker.execute();
    }

    private void updateTable(List<Lote> lotes) {
        tableModel.setRowCount(0);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        
        for (Lote lote : lotes) {
            Object[] row = {
                lote.getId(),
                lote.getOrigen(),
                lote.getFechaIngreso().format(formatter),
                String.format("%.1f", lote.getCantidad()),
                lote.getVariedad(),
                lote.getEstado(),
                lote.getProcesoActual() != null ? lote.getProcesoActual() : "-",
                lote.getAvance() + "%"
            };
            tableModel.addRow(row);
        }
    }
}
