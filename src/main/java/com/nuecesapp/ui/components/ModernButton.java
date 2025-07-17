package com.nuecesapp.ui.components;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

/**
 * Botón con estilo moderno
 */
public class ModernButton extends JButton {
    private Color backgroundColor;
    private Color hoverColor;
    private Color pressedColor;
    private boolean isHovered = false;
    private boolean isPressed = false;

    public ModernButton(String text) {
        this(text, new Color(59, 130, 246)); // Azul por defecto
    }

    public ModernButton(String text, Color backgroundColor) {
        super(text);
        this.backgroundColor = backgroundColor;
        this.hoverColor = backgroundColor.darker();
        this.pressedColor = backgroundColor.darker().darker();
        
        setupButton();
        setupMouseListeners();
    }

    private void setupButton() {
        setFont(new Font("SansSerif", Font.BOLD, 14));
        setForeground(Color.WHITE);
        setFocusPainted(false);
        setBorderPainted(false);
        setContentAreaFilled(false);
        setOpaque(true);
        setCursor(new Cursor(Cursor.HAND_CURSOR));
        
        // Padding
        setBorder(BorderFactory.createEmptyBorder(12, 24, 12, 24));
    }

    private void setupMouseListeners() {
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseEntered(MouseEvent e) {
                isHovered = true;
                repaint();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                isHovered = false;
                repaint();
            }

            @Override
            public void mousePressed(MouseEvent e) {
                isPressed = true;
                repaint();
            }

            @Override
            public void mouseReleased(MouseEvent e) {
                isPressed = false;
                repaint();
            }
        });
    }

    @Override
    protected void paintComponent(Graphics g) {
        Graphics2D g2d = (Graphics2D) g.create();
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        // Determinar color de fondo
        Color bgColor = backgroundColor;
        if (!isEnabled()) {
            bgColor = backgroundColor.brighter();
        } else if (isPressed) {
            bgColor = pressedColor;
        } else if (isHovered) {
            bgColor = hoverColor;
        }

        // Dibujar fondo redondeado
        g2d.setColor(bgColor);
        g2d.fillRoundRect(0, 0, getWidth(), getHeight(), 8, 8);

        g2d.dispose();
        super.paintComponent(g);
    }

    public void setBackgroundColor(Color backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.hoverColor = backgroundColor.darker();
        this.pressedColor = backgroundColor.darker().darker();
        repaint();
    }
}
