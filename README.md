# EME X Agencia Digital — Sitio web

Landing page estática (HTML, CSS y JavaScript sin frameworks ni build step) para EME X Agencia Digital. Pensada para publicarse directamente en GitHub Pages con un dominio propio.

## Estructura del proyecto

```
/
├── index.html        Página principal
├── styles.css         Estilos del sitio
├── script.js          Comportamiento (menú móvil, ticker, formulario)
├── assets/
│   └── favicon.svg    Ícono del sitio
├── CNAME              Dominio personalizado para GitHub Pages
├── .nojekyll          Evita que GitHub procese el sitio con Jekyll
├── robots.txt         Indicaciones para buscadores
└── README.md          Este archivo
```

No hay dependencias que instalar ni proceso de compilación. El sitio funciona abriendo `index.html` directamente o sirviéndolo desde cualquier hosting estático.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en la cuenta de GitHub del cliente (por ejemplo `emex-agencia-digital`).
2. Subir todo el contenido de esta carpeta a la rama principal (`main`).
3. En el repositorio, ir a **Settings → Pages**.
4. En **Source**, seleccionar la rama `main` y la carpeta `/ (root)`.
5. Guardar. GitHub publicará el sitio en una URL del tipo `https://usuario.github.io/emex-agencia-digital/`.

## Conectar el dominio personalizado

El archivo `CNAME` ya incluido en este repositorio trae como ejemplo `www.emexagencia.com`. Antes de publicar:

1. Abrir el archivo `CNAME` y reemplazar el dominio de ejemplo por el dominio real del cliente.
2. En el proveedor de DNS donde esté administrado el dominio (Hostinger, GoDaddy, Cloudflare, etc.), crear los siguientes registros:

   **Para usar `www.tudominio.com`:**
   - Tipo `CNAME`, host `www`, valor `usuario.github.io`

   **Para que el dominio raíz (`tudominio.com`, sin `www`) también funcione:**
   - Tipo `A`, host `@`, apuntando a las cuatro IPs de GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Opcionalmente, un registro `AAAA` con las IPs IPv6 de GitHub si el proveedor lo soporta.

3. Volver a **Settings → Pages** en GitHub, escribir el dominio personalizado en el campo correspondiente y guardar.
4. Activar **Enforce HTTPS** en cuanto la opción esté disponible (puede tardar unos minutos u horas mientras se emite el certificado).
5. La propagación de DNS puede tardar hasta 24 horas.

## Formulario de contacto

El formulario de la sección de contacto valida los campos y muestra una confirmación en pantalla, pero **no envía correos por sí solo**: GitHub Pages solo sirve archivos estáticos y no ejecuta backend. Para recibir los mensajes hay dos rutas simples:

- Conectar el formulario a un servicio externo como Formspree, Getform o Basin (solo requiere cambiar el `action` del formulario en `index.html` y ajustar unas líneas en `script.js`).
- Sustituir el formulario por un enlace `mailto:` o por un botón hacia WhatsApp Business si se prefiere evitar servicios de terceros.

## Edición de contenido

Todo el texto vive directamente en `index.html`. Los colores, tipografías y espaciados están centralizados como variables al inicio de `styles.css`, en el bloque `:root`, para poder ajustar la paleta o el tono visual sin tocar el resto del archivo.
