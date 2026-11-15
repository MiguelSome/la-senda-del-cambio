# La Senda del Cambio

Web de presentación de la consulta de psicología **La Senda del Cambio**, orientada a personas adultas. Incluye información sobre la consulta, metodología, servicios, tarifas de terapia para adultos e informe psicológico para adultos, ubicación y vías de contacto.

## Tecnologías

- HTML5
- CSS3
- JavaScript nativo (sin frameworks ni dependencias de compilación)

## Estructura

```text
la-senda-del-cambio/
├── index.html
├── css/styles.css
├── js/main.js
├── img/
│   ├── logo-la-senda-del-cambio.png
│   └── belen-felisa-granados.jpg  # añadir la fotografía profesional
├── pages/
│   ├── aviso-legal.html
│   ├── politica-privacidad.html
│   └── politica-cookies.html
└── README.md
```

## Ejecutar en local

No requiere instalación. Abre `index.html` en un navegador o utiliza Live Server desde Visual Studio Code.

## Formulario de contacto

El formulario no utiliza un backend ni almacena datos en la web. Valida los campos y prepara un correo mediante `mailto:` dirigido a `belenfelisa.granados@gmail.com`. La persona visitante debe revisar y enviar el mensaje desde su aplicación de correo. No se solicitan datos clínicos en el primer contacto.

## Personalización

- Contenido: `index.html`.
- Diseño y responsive: `css/styles.css`.
- Menú, formulario y año del copyright: `js/main.js`.
- Recursos gráficos: `img/`.

## Antes de publicar

Los textos legales son borradores que requieren completar y verificar datos que no se han facilitado (por ejemplo, NIF, denominación exacta de la titulación, colegio profesional, proveedor de alojamiento y plazos de conservación). Deben revisarse con asesoramiento especializado. Comprueba también el entorno de producción para identificar cookies y servicios de terceros reales.

La fotografía profesional debe estar disponible en `img/belen-felisa-granados.jpg`; si se usa otro nombre, actualiza la ruta en `index.html`.

## Publicación con GitHub Pages

1. Sube el contenido del proyecto a un repositorio.
2. En GitHub, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique la web.

## Licencia

No se ha especificado una licencia. Añade un archivo `LICENSE` si deseas definir condiciones de reutilización del código. Asegúrate de tener derechos sobre fotografías y recursos gráficos.
