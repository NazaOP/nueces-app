package com.nuecesapp.ui;

import com.nuecesapp.service.AuthService;
import com.nuecesapp.ui.panels.*;

import javax.swing.*;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

/**
 * Ventana principal de la aplicación
 */
public class MainFrame extends JFrame {
    private JTabbedPane tabbedPane;
    private DashboardPanel dashboardPanel;
    private LotesPanel lotesPanel;
    private ProcesosPanel procesosPanel;
    private TrazabilidadPanel trazabilidadPanel;
    private CalidadPanel calidadPanel;
    private SensoresPanel sensoresPanel;

    public MainFrame() {
        initializeComponents();
        setupLayout();
        setupMenuBar();
        setupFrame();
    }

    private void initializeComponents() {
        tabbedPane = new JTabbedPane();
        tabbedPane.setFont(new Font("SansSerif", Font.PLAIN, 14));

        // Crear paneles
        dashboardPanel = new DashboardPanel();
        lotesPanel = new LotesPanel();
        procesosPanel = new ProcesosPanel();
        trazabilidadPanel = new TrazabilidadPanel();
        calidadPanel = new CalidadPanel();
        sensoresPanel = new SensoresPanel();

        // Agregar pestañas
        tabbedPane.addTab("Dashboard", createIcon("📊"), dashboardPanel, "Panel principal con resumen");
        tabbedPane.addTab("Lotes", createIcon("📦"), lotesPanel, "Gestión de lotes");
        tabbedPane.addTab("Procesos", createIcon("⚙️"), procesosPanel, "Gestión de procesos");
        tabbedPane.addTab("Trazabilidad", createIcon("🔍"), trazabilidadPanel, "Seguimiento y trazabilidad");
        tabbedPane.addTab("Calidad", createIcon("✅"), calidadPanel, "Control de calidad");
        tabbedPane.addTab("Sensores", createIcon("📡"), sensoresPanel, "Monitoreo de sensores IoT");
    }

    private Icon createIcon(String emoji) {
        return new Icon() {
            @Override
            public void paintIcon(Component c, Graphics g, int x, int y) {
                g.setFont(new Font("SansSerif", Font.PLAIN, 16));
                g.drawString(emoji, x, y + 12);
            }

            @Override
            public int getIconWidth() { return 20; }

            @Override
            public int getIconHeight() { return 16; }
        };
    }

    private void setupLayout() {
        setLayout(new BorderLayout());
        add(tabbedPane, BorderLayout.CENTER);

        // Panel de estado
        JPanel statusPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        statusPanel.setBorder(BorderFactory.createEtchedBorder());
        
        JLabel userLabel = new JLabel("Usuario: " + AuthService.getUsuarioActual().getNombreCompleto());
        userLabel.setFont(new Font("SansSerif", Font.PLAIN, 12));
        statusPanel.add(userLabel);

        add(statusPanel, BorderLayout.SOUTH);
    }

    private void setupMenuBar() {
        JMenuBar menuBar = new JMenuBar();

        // Menú Archivo
        JMenu archivoMenu = new JMenu("Archivo");
        
        JMenuItem exportarItem = new JMenuItem("Exportar Datos");
        exportarItem.addActionListener(e -> exportarDatos());
        archivoMenu.add(exportarItem);
        
        archivoMenu.addSeparator();
        
        JMenuItem salirItem = new JMenuItem("Salir");
        salirItem.addActionListener(e -> cerrarAplicacion());
        archivoMenu.add(salirItem);

        // Menú Usuario
        JMenu usuarioMenu = new JMenu("Usuario");
        
        JMenuItem perfilItem = new JMenuItem("Mi Perfil");
        perfilItem.addActionListener(e -> mostrarPerfil());
        usuarioMenu.add(perfilItem);
        
        usuarioMenu.addSeparator();
        
        JMenuItem cerrarSesionItem = new JMenuItem("Cerrar Sesión");
        cerrarSesionItem.addActionListener(e -> cerrarSesion());
        usuarioMenu.add(cerrarSesionItem);

        // Menú Ayuda
        JMenu ayudaMenu = new JMenu("Ayuda");
        
        JMenuItem acercaDeItem = new JMenuItem("Acerca de");
        acercaDeItem.addActionListener(e -> mostrarAcercaDe());
        ayudaMenu.add(acercaDeItem);

        menuBar.add(archivoMenu);
        menuBar.add(usuarioMenu);
        menuBar.add(ayudaMenu);

        setJMenuBar(menuBar);
    }

    private void exportarDatos() {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setDialogTitle("Exportar Datos");
        
        if (fileChooser.showSaveDialog(this) == JFileChooser.APPROVE_OPTION) {
            // Implementar exportación de datos
            JOptionPane.showMessageDialog(this, 
                "Funcionalidad de exportación en desarrollo",
                "Información", 
                JOptionPane.INFORMATION_MESSAGE);
        }
    }

    private void mostrarPerfil() {
        // Implementar ventana de perfil de usuario
        JOptionPane.showMessageDialog(this,
            "Perfil de usuario: " + AuthService.getUsuarioActual().getNombreCompleto(),
            "Mi Perfil",
            JOptionPane.INFORMATION_MESSAGE);
    }

    private void cerrarSesion() {
        int option = JOptionPane.showConfirmDialog(this,
            "¿Está seguro que desea cerrar sesión?",
            "Cerrar Sesión",
            JOptionPane.YES_NO_OPTION);

        if (option == JOptionPane.YES_OPTION) {
            AuthService.logout();
            LoginFrame loginFrame = new LoginFrame();
            loginFrame.setVisible(true);
            dispose();
        }
    }

    private void mostrarAcercaDe() {
        JOptionPane.showMessageDialog(this,
            "NuecesApp v1.0.0\n" +
            "Sistema de Gestión de Stock para Producción y Procesamiento de Nueces\n\n" +
            "Desarrollado con Java Swing\n" +
            "© 2025 NuecesApp",
            "Acerca de NuecesApp",
            JOptionPane.INFORMATION_MESSAGE);
    }

    private void cerrarAplicacion() {
        int option = JOptionPane.showConfirmDialog(this,
            "¿Está seguro que desea salir de la aplicación?",
            "Salir",
            JOptionPane.YES_NO_OPTION);

        if (option == JOptionPane.YES_OPTION) {
            System.exit(0);
        }
    }

    private void setupFrame() {
        setTitle("NuecesApp - Sistema de Gestión de Stock");
        setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        setExtendedState(JFrame.MAXIMIZED_BOTH);
        setMinimumSize(new Dimension(1024, 768));
        setLocationRelativeTo(null);

        // Manejar cierre de ventana
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                cerrarAplicacion();
            }
        });
    }
}
