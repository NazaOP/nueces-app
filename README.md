# NuecesApp - Sistema de Gestión de Stock

Sistema de escritorio desarrollado en Java para la gestión de stock en la producción y procesamiento de nueces.

## 🚀 Características

- **Gestión de Lotes**: Control completo del inventario de nueces
- **Procesos de Producción**: Seguimiento de secado, pelado, clasificación y empaque
- **Trazabilidad**: Historial completo de cada lote desde ingreso hasta exportación
- **Control de Calidad**: Registro y seguimiento de parámetros de calidad
- **Sensores IoT**: Monitoreo en tiempo real de condiciones ambientales
- **Reportes**: Generación de informes y estadísticas

## 🛠️ Tecnologías

- **Lenguaje**: Java 17
- **Interfaz**: Java Swing con FlatLaf
- **Base de Datos**: SQLite (por defecto) / PostgreSQL
- **Gestión de Dependencias**: Maven
- **Logging**: Logback
- **Testing**: JUnit 5

## 📋 Requisitos

- Java 17 o superior
- Maven 3.6 o superior
- SQLite (incluido) o PostgreSQL (opcional)

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/tu-usuario/nueces-app.git
cd nueces-app
\`\`\`

### 2. Compilar el proyecto
\`\`\`bash
mvn clean compile
\`\`\`

### 3. Ejecutar la aplicación
\`\`\`bash
mvn exec:java -Dexec.mainClass="com.nuecesapp.Main"
\`\`\`

### 4. Generar JAR ejecutable
\`\`\`bash
mvn clean package
java -jar target/nueces-app-1.0.0.jar
\`\`\`

## 👤 Credenciales por Defecto

- **Usuario**: admin
- **Contraseña**: admin

## 📁 Estructura del Proyecto

\`\`\`
src/
├── main/
│   ├── java/
│   │   └── com/nuecesapp/
│   │       ├── Main.java                 # Clase principal
│   │       ├── config/                   # Configuración
│   │       ├── model/                    # Modelos de datos
│   │       ├── service/                  # Lógica de negocio
│   │       └── ui/                       # Interfaz de usuario
│   └── resources/
│       ├── application.properties        # Configuración
│       └── logback.xml                  # Configuración de logging
└── test/
    └── java/                            # Tests unitarios
\`\`\`

## 🗄️ Base de Datos

### SQLite (Por defecto)
La aplicación crea automáticamente una base de datos SQLite en `data/nuecesapp.db`.

### PostgreSQL (Opcional)
Para usar PostgreSQL, modifica `application.properties`:

```properties
database.type=postgresql
database.postgresql.host=localhost
database.postgresql.port=5432
database.postgresql.database=nuecesapp
database.postgresql.username=tu_usuario
database.postgresql.password=tu_password
