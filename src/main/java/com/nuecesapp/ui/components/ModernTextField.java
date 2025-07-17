package com.nuecesapp.ui.components;

import javax.swing.*;
import java.awt.*;
import java.awt.event.FocusAdapter;
import java.awt.event.FocusEvent;

/**
 * Campo de texto con estilo moderno y placeholder
 */
public class ModernTextField extends JTextField {
    private String placeholder;
    private boolean showingPlaceholder = true;

    public ModernTextField() {
        this("");
    }

    public ModernTextField(String placeholder) {
        this.placeholder = placeholder;
        setupTextField();
        setupFocusListeners();
        showPlaceholder();
    }

    private void setupTextField() {
        setFont(new Font("SansSerif", Font.PLAIN, 14));
        setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(200, 200, 200)),
            BorderFactory.createEmptyBorder(10, 15, 10, 15)
        ));
        setPreferredSize(new Dimension(250, 40));
    }

    private void setupFocusListeners() {
        addFocusListener(new FocusAdapter() {
            @Override
            public void focusGained(FocusEvent e) {
                if (showingPlaceholder) {
                    hidePlaceholder();
                }
                setBorder(BorderFactory.createCompoundBorder(
                    BorderFactory.createLineBorder(new Color(59, 130, 246), 2),
                    BorderFactory.createEmptyBorder(9, 14, 9, 14)
                ));
            }

            @Override
            public void focusLost(FocusEvent e) {
                if (getText().isEmpty()) {
                    showPlaceholder();
                }
                setBorder(BorderFactory.createCompoundBorder(
                    BorderFactory.createLineBorder(new Color(200, 200, 200)),
                    BorderFactory.createEmptyBorder(10, 15, 10, 15)
                ));
            }
        });
    }

    private void showPlaceholder() {
        if (placeholder != null && !placeholder.isEmpty()) {
            setText(placeholder);
            setForeground(Color.GRAY);
            showingPlaceholder = true;
        }
    }

    private void hidePlaceholder() {
        setText("");
        setForeground(Color.BLACK);
        showingPlaceholder = false;
    }

    @Override
    public String getText() {
        return showingPlaceholder ? "" : super.getText();
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
        if (showingPlaceholder) {
            showPlaceholder();
        }
    }
}
