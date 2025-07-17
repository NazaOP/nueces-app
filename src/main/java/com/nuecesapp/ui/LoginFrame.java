package com.nuecesapp.ui;

import com.nuecesapp.service.AuthService;
import com.nuecesapp.ui.components.ModernButton;
import com.nuecesapp.ui.components.ModernTextField;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Ventana de inicio de sesión
 */
public class LoginFrame extends JFrame {
    private ModernTextField usernameField;
    private JPasswordField passwordField;
    private ModernButton loginButton;
    private JLabel statusLabel;

    public LoginFrame() {
        initializeComponents();
        setupLayout();
        setupEventHandlers();
        setupFrame();
    }

    private void initializeComponents() {
        usernameField = new ModernTextField("Usuario");
        passwordField = new JPasswordField();
        passwordField.setFont(new Font("SansSerif", Font.PLAIN, 14));
        passwordField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200)),
            BorderFactory.createEmptyBorder(10, 15, 10, 15)
        ));

        loginButton = new ModernButton("Iniciar Sesión", new Color(184, 134, 11));
        statusLabel = new JLabel(" ");
        statusLabel.setForeground(Color.RED);
        statusLabel.setHorizontalAlignment(SwingConstants.CENTER);
    }

    private void setupLayout() {
        setLayout(new BorderLayout());

        // Panel principal
        JPanel mainPanel = new JPanel(new GridBagLayout());
        mainPanel.setBackground(Color.WHITE);
        mainPanel.setBorder(BorderFactory.createEmptyBorder(40, 40, 40, 40));

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 0, 10, 0);
        gbc.fill = GridBagConstraints.HORIZONTAL;

        // Logo y título
        JLabel titleLabel = new JLabel("NuecesApp", SwingConstants.CENTER);
        titleLabel.setFont(new Font("SansSerif", Font.BOLD, 32));
        titleLabel.setForeground(new Color(184, 134, 11));
        gbc.gridx = 0; gbc.gridy = 0; gbc.gridwidth = 2;
        mainPanel.add(titleLabel, gbc);

        JLabel subtitleLabel = new JLabel("Sistema de Gestión de Stock", SwingConstants.CENTER);
        subtitleLabel.setFont(new Font("SansSerif", Font.PLAIN, 16));
        subtitleLabel.setForeground(Color.GRAY);
        gbc.gridy = 1;
        mainPanel.add(subtitleLabel, gbc);

        // Campos de entrada
        gbc.gridwidth = 1;
        gbc.gridy = 2;
        gbc.insets = new Insets(30, 0, 10, 0);
        JLabel userLabel = new JLabel("Usuario:");
        userLabel.setFont(new Font("SansSerif", Font.BOLD, 14));
        mainPanel.add(userLabel, gbc);

        gbc.gridy = 3;
        gbc.insets = new Insets(0, 0, 20, 0);
        mainPanel.add(usernameField, gbc);

        gbc.gridy = 4;
        gbc.insets = new Insets(0, 0, 10, 0);
        JLabel passLabel = new JLabel("Contraseña:");
        passLabel.setFont(new Font("SansSerif", Font.BOLD, 14));
        mainPanel.add(passLabel, gbc);

        gbc.gridy = 5;
        gbc.insets = new Insets(0, 0, 20, 0);
        mainPanel.add(passwordField, gbc);

        // Botón de login
        gbc.gridy = 6;
        gbc.insets = new Insets(10, 0, 10, 0);
        mainPanel.add(loginButton, gbc);

        // Label de estado
        gbc.gridy = 7;
        mainPanel.add(statusLabel, gbc);

        add(mainPanel, BorderLayout.CENTER);
    }

    private void setupEventHandlers() {
        ActionListener loginAction = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                performLogin();
            }
        };

        loginButton.addActionListener(loginAction);
        usernameField.addActionListener(loginAction);
        passwordField.addActionListener(loginAction);
    }

    private void performLogin() {
        String username = usernameField.getText().trim();
        String password = new String(passwordField.getPassword());

        if (username.isEmpty() || password.isEmpty()) {
            showStatus("Por favor, complete todos los campos", true);
            return;
        }

        // Deshabilitar botón durante la autenticación
        loginButton.setEnabled(false);
        loginButton.setText("Autenticando...");

        // Realizar autenticación en un hilo separado
        SwingWorker<Boolean, Void> worker = new SwingWorker<Boolean, Void>() {
            @Override
            protected Boolean doInBackground() throws Exception {
                return AuthService.login(username, password);
            }

            @Override
            protected void done() {
                try {
                    boolean success = get();
                    if (success) {
                        showStatus("Inicio de sesión exitoso", false);
                        openMainWindow();
                    } else {
                        showStatus("Usuario o contraseña incorrectos", true);
                    }
                } catch (Exception e) {
                    showStatus("Error al iniciar sesión", true);
                } finally {
                    loginButton.setEnabled(true);
                    loginButton.setText("Iniciar Sesión");
                    passwordField.setText("");
                }
            }
        };

        worker.execute();
    }

    private void showStatus(String message, boolean isError) {
        statusLabel.setText(message);
        statusLabel.setForeground(isError ? Color.RED : new Color(0, 150, 0));
    }

    private void openMainWindow() {
        SwingUtilities.invokeLater(() -> {
            MainFrame mainFrame = new MainFrame();
            mainFrame.setVisible(true);
            dispose();
        });
    }

    private void setupFrame() {
        setTitle("NuecesApp - Inicio de Sesión");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 500);
        setLocationRelativeTo(null);
        setResizable(false);

        // Icono de la aplicación (opcional)
        try {
            // setIconImage(Toolkit.getDefaultToolkit().getImage("icon.png"));
        } catch (Exception e) {
            // Ignorar si no se encuentra el icono
        }
    }
}
