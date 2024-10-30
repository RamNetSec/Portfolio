# Portfolio

## Descripción
Este es el portafolio de Ramses Valdez, un técnico en desarrollo de software y aprendiz de ciberseguridad. El portafolio muestra sus habilidades, proyectos y certificaciones.

## Tecnologías Utilizadas
- React
- Material-UI
- Framer Motion
- React Simple Typewriter

## Cómo Ejecutar el Proyecto en Producción

1. **Clona el repositorio:**
 ```sh
   git clone https://github.com/RamNetSec/portfolio.git
   cd portfolio/app-portafolio-ram
   ```

2. **Instala las dependencias necesarias:**
   Ejecuta el siguiente comando para instalar todas las dependencias requeridas por el proyecto.
   ```sh
   npm install
   ```

3. **Construye el proyecto para producción:**
   Ejecuta el siguiente comando para construir la versión optimizada para producción.
   ```sh
   npm run build
   ```

4. **Configura el servicio usando systemd:**
   Para demonizar el servidor usando systemd, primero debes crear un archivo de unidad (`.service`) para systemd.
   Crea el archivo `/etc/systemd/system/portfolio.service` con el siguiente contenido (requiere permisos de administrador):
   ```ini
   [Unit]
   Description=Portfolio de Ramses Valdez
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/ruta/a/tu/proyecto/app-portafolio-ram
   ExecStart=/usr/local/bin/serve -s build -l 80
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```
   Asegúrate de reemplazar `/ruta/a/tu/proyecto/app-portafolio-ram` con la ruta correcta donde se encuentra tu proyecto. Además, asegúrate de que la ruta a `serve` sea correcta, utilizando el comando `which serve` para verificar.

5. **Habilita e inicia el servicio:**
   Después de crear el archivo de servicio, habilita e inicia el servicio utilizando los siguientes comandos (requiere permisos de administrador):
   ```sh
   sudo systemctl daemon-reload
   sudo systemctl enable portfolio.service
   sudo systemctl start portfolio.service
   ```

6. **Verifica el estado del servicio:**
   Puedes verificar que el servicio se esté ejecutando correctamente con el siguiente comando:
   ```sh
   sudo systemctl status portfolio.service
   ```

7. **Abre en el navegador:**
   El proyecto se ejecutará en la dirección `http://localhost`. Abre esta URL en tu navegador para visualizar el portafolio.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **src/**: Contiene todos los archivos fuente del proyecto, incluyendo componentes, estilos y otros recursos importantes.
  - **components/**: Contiene los componentes React reutilizables del portafolio.
  - **App.js**: Archivo principal donde se estructura el contenido de la aplicación.
  - **App.css / styles.css**: Archivos de estilo para personalizar el diseño visual de la aplicación.

## Características del Proyecto
- **Animaciones suaves**: Gracias a **Framer Motion**, el portafolio incluye animaciones atractivas que mejoran la experiencia del usuario.
- **Elementos 3D**: Utilizando **React Three Fiber**, se incluyeron fragmentos 3D para darle una estética moderna al portafolio.
- **Interactividad con Iconos**: Los iconos de **React Icons** permiten acceder fácilmente a los perfiles de redes sociales de Ramses.

## Certificaciones y Proyectos
El portafolio también muestra las certificaciones y proyectos más relevantes en los que Ramses ha trabajado. Entre ellos se encuentran:
- **Certificación en Ciberseguridad**: Cisco Networking Academy - Introducción a la Ciberseguridad.
- **Certificación en Linux**: NDG Linux Unhatched.
- **Proyectos de desarrollo de software**: Presentados con descripciones y tecnologías utilizadas.

## Contacto
Puedes contactar a Ramses Valdez a través de:
- **GitHub**: [https://github.com/RamNetSec](https://github.com/RamNetSec)
- **LinkedIn**: [https://linkedin.com/in/ramnetsecurity](https://linkedin.com/in/ramnetsecurity)

## Licencia
Este proyecto está bajo la licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor crea un fork del repositorio, realiza tus cambios y crea una solicitud de extracción (**pull request**).

## Autor
**Ramses Valdez** - Técnico en Desarrollo de Software y Aprendiz de Ciberseguridad.

Si tienes alguna duda o sugerencia, no dudes en contactarme a través de mis redes sociales. ¡Gracias por visitar mi portafolio!
