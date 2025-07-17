package com.nuecesapp.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * Configuración de la base de datos
 * Soporta SQLite y PostgreSQL
 */
public class DatabaseConfig {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseConfig.class);
    private static HikariDataSource dataSource;
    private static String databaseType;

    public static void initialize() throws SQLException, IOException {
        Properties props = loadProperties();
        databaseType = props.getProperty("database.type", "sqlite");
        
        HikariConfig config = new HikariConfig();
        
        if ("sqlite".equalsIgnoreCase(databaseType)) {
            setupSQLite(config, props);
        } else if ("postgresql".equalsIgnoreCase(databaseType)) {
            setupPostgreSQL(config, props);
        } else {
            throw new IllegalArgumentException("Tipo de base de datos no soportado: " + databaseType);
        }
        
        dataSource = new HikariDataSource(config);
        createTables();
        insertDefaultData();
        
        logger.info("Base de datos {} inicializada correctamente", databaseType);
    }

    private static Properties loadProperties() throws IOException {
        Properties props = new Properties();
        try (InputStream is = DatabaseConfig.class.getResourceAsStream("/application.properties")) {
            if (is != null) {
                props.load(is);
            }
        }
        return props;
    }

    private static void setupSQLite(HikariConfig config, Properties props) throws IOException {
        String dbPath = props.getProperty("database.sqlite.path", "data/nuecesapp.db");
        Path dbFile = Paths.get(dbPath);
        
        // Crear directorio si no existe
        Files.createDirectories(dbFile.getParent());
        
        config.setJdbcUrl("jdbc:sqlite:" + dbPath);
        config.setDriverClassName("org.sqlite.JDBC");
        config.setMaximumPoolSize(1); // SQLite no soporta conexiones concurrentes
    }

    private static void setupPostgreSQL(HikariConfig config, Properties props) {
        String host = props.getProperty("database.postgresql.host", "localhost");
        String port = props.getProperty("database.postgresql.port", "5432");
        String database = props.getProperty("database.postgresql.database", "nuecesapp");
        String username = props.getProperty("database.postgresql.username", "nuecesapp");
        String password = props.getProperty("database.postgresql.password", "password");
        
        config.setJdbcUrl(String.format("jdbc:postgresql://%s:%s/%s", host, port, database));
        config.setUsername(username);
        config.setPassword(password);
        config.setDriverClassName("org.postgresql.Driver");
        config.setMaximumPoolSize(10);
    }

    public static Connection getConnection() throws SQLException {
        if (dataSource == null) {
            throw new SQLException("Base de datos no inicializada");
        }
        return dataSource.getConnection();
    }

    public static void shutdown() {
        if (dataSource != null) {
            dataSource.close();
            logger.info("Conexión a base de datos cerrada");
        }
    }

    private static void createTables() throws SQLException {
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement()) {
            
            // Tabla usuarios
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre VARCHAR(100) NOT NULL,
                    apellido VARCHAR(100) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    username VARCHAR(50) UNIQUE NOT NULL,
                    password_hash VARCHAR(255) NOT NULL,
                    rol VARCHAR(20) NOT NULL,
                    activo BOOLEAN DEFAULT TRUE,
                    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """);

            // Tabla lotes
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS lotes (
                    id VARCHAR(20) PRIMARY KEY,
                    origen VARCHAR(255) NOT NULL,
                    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    cantidad DECIMAL(10,2) NOT NULL,
                    variedad VARCHAR(100) NOT NULL,
                    estado VARCHAR(20) DEFAULT 'recibido',
                    humedad_inicial DECIMAL(5,2),
                    humedad_actual DECIMAL(5,2),
                    color VARCHAR(50),
                    calibre_promedio DECIMAL(5,2),
                    proceso_actual VARCHAR(50),
                    ubicacion VARCHAR(100),
                    responsable VARCHAR(200),
                    avance INTEGER DEFAULT 0
                )
            """);

            // Tabla procesos
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS procesos (
                    id VARCHAR(20) PRIMARY KEY,
                    tipo VARCHAR(20) NOT NULL,
                    lote_id VARCHAR(20) NOT NULL,
                    cantidad DECIMAL(10,2) NOT NULL,
                    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    fecha_fin TIMESTAMP,
                    responsable VARCHAR(200) NOT NULL,
                    estado VARCHAR(20) DEFAULT 'iniciando',
                    parametros TEXT,
                    avance INTEGER DEFAULT 0,
                    creado_por INTEGER,
                    FOREIGN KEY (lote_id) REFERENCES lotes(id),
                    FOREIGN KEY (creado_por) REFERENCES usuarios(id)
                )
            """);

            // Tabla sensores
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS sensores (
                    id VARCHAR(20) PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    tipo VARCHAR(20) NOT NULL,
                    ubicacion VARCHAR(100) NOT NULL,
                    ultima_lectura TIMESTAMP,
                    valor DECIMAL(10,2),
                    unidad VARCHAR(10),
                    bateria INTEGER DEFAULT 100,
                    estado VARCHAR(20) DEFAULT 'offline',
                    intervalo INTEGER DEFAULT 15,
                    umbral_min DECIMAL(10,2),
                    umbral_max DECIMAL(10,2),
                    alertas_activas BOOLEAN DEFAULT TRUE,
                    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """);

            // Tabla lecturas_sensores
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS lecturas_sensores (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    sensor_id VARCHAR(20) NOT NULL,
                    valor DECIMAL(10,2) NOT NULL,
                    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    estado VARCHAR(20) DEFAULT 'normal',
                    FOREIGN KEY (sensor_id) REFERENCES sensores(id)
                )
            """);

            // Tabla controles_calidad
            stmt.execute("""
                CREATE TABLE IF NOT EXISTS controles_calidad (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    lote_id VARCHAR(20) NOT NULL,
                    tipo VARCHAR(20) NOT NULL,
                    valor VARCHAR(50) NOT NULL,
                    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    responsable VARCHAR(200) NOT NULL,
                    observaciones TEXT,
                    estado VARCHAR(20) DEFAULT 'normal',
                    FOREIGN KEY (lote_id) REFERENCES lotes(id)
                )
            """);

            logger.info("Tablas de base de datos creadas correctamente");
        }
    }

    private static void insertDefaultData() throws SQLException {
        try (Connection conn = getConnection()) {
            // Insertar usuario administrador por defecto
            try (var stmt = conn.prepareStatement(
                "INSERT OR IGNORE INTO usuarios (nombre, apellido, email, username, password_hash, rol) VALUES (?, ?, ?, ?, ?, ?)")) {
                stmt.setString(1, "Administrador");
                stmt.setString(2, "Sistema");
                stmt.setString(3, "admin@nuecesapp.com");
                stmt.setString(4, "admin");
                stmt.setString(5, "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi"); // password: admin
                stmt.setString(6, "admin");
                stmt.executeUpdate();
            }

            // Insertar datos de ejemplo
            insertSampleData(conn);
            
            logger.info("Datos por defecto insertados correctamente");
        }
    }

    private static void insertSampleData(Connection conn) throws SQLException {
        // Lotes de ejemplo
        try (var stmt = conn.prepareStatement(
            "INSERT OR IGNORE INTO lotes (id, origen, cantidad, variedad, estado, humedad_inicial, humedad_actual, color, calibre_promedio, proceso_actual, ubicacion, responsable, avance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
            
            stmt.setString(1, "A2345");
            stmt.setString(2, "Finca Los Nogales");
            stmt.setDouble(3, 1250.0);
            stmt.setString(4, "Chandler");
            stmt.setString(5, "en_proceso");
            stmt.setDouble(6, 18.0);
            stmt.setDouble(7, 12.0);
            stmt.setString(8, "Ámbar Claro");
            stmt.setDouble(9, 32.0);
            stmt.setString(10, "secado");
            stmt.setString(11, "Secador #2");
            stmt.setString(12, "María González");
            stmt.setInt(13, 65);
            stmt.executeUpdate();
        }

        // Sensores de ejemplo
        try (var stmt = conn.prepareStatement(
            "INSERT OR IGNORE INTO sensores (id, nombre, tipo, ubicacion, valor, unidad, bateria, estado, umbral_min, umbral_max) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
            
            stmt.setString(1, "S001");
            stmt.setString(2, "Sensor Humedad #1");
            stmt.setString(3, "humedad");
            stmt.setString(4, "Secador #1");
            stmt.setDouble(5, 12.0);
            stmt.setString(6, "%");
            stmt.setInt(7, 85);
            stmt.setString(8, "online");
            stmt.setDouble(9, 7.0);
            stmt.setDouble(10, 14.0);
            stmt.executeUpdate();
        }
    }
}
