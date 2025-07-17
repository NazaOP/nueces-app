package com.nuecesapp.service;

import com.nuecesapp.config.DatabaseConfig;
import com.nuecesapp.model.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para AuthService
 */
public class AuthServiceTest {

    @BeforeEach
    void setUp() throws Exception {
        DatabaseConfig.initialize();
    }

    @Test
    void testLoginExitoso() {
        boolean result = AuthService.login("admin", "admin");
        assertTrue(result);
        assertTrue(AuthService.isAuthenticated());
        assertNotNull(AuthService.getUsuarioActual());
        assertEquals("admin", AuthService.getUsuarioActual().getUsername());
    }

    @Test
    void testLoginFallido() {
        boolean result = AuthService.login("admin", "password_incorrecta");
        assertFalse(result);
        assertFalse(AuthService.isAuthenticated());
        assertNull(AuthService.getUsuarioActual());
    }

    @Test
    void testLogout() {
        AuthService.login("admin", "admin");
        assertTrue(AuthService.isAuthenticated());
        
        AuthService.logout();
        assertFalse(AuthService.isAuthenticated());
        assertNull(AuthService.getUsuarioActual());
    }

    @Test
    void testRegistrarUsuario() {
        Usuario nuevoUsuario = new Usuario("Test", "Usuario", "test@test.com", "testuser", "operador");
        boolean result = AuthService.registrarUsuario(nuevoUsuario, "password123");
        assertTrue(result);
        
        // Verificar que se puede hacer login con el nuevo usuario
        boolean loginResult = AuthService.login("testuser", "password123");
        assertTrue(loginResult);
    }
}
