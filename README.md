# Mendieta Studio — Sitio Web

Sitio oficial de Mendieta Studio, desarrollado con React + Vite y desplegado mediante GitHub Pages con dominio personalizado `mendietastudio.com`.

## Qué se corrigió

- Se corrigió la estrategia de rutas para evitar la pantalla blanca cuando GitHub Pages sirve rutas directas.
- Se ajustó el `base` de Vite a `/` para funcionar correctamente con el dominio personalizado `mendietastudio.com` y evitar problemas de carga de assets en producción.
- Se robusteció el fallback SPA en `public/404.html` para redirigir correctamente tanto en `*.github.io` como en dominio custom.
- Se mantiene `BrowserRouter` con `basename` dinámico según host para navegación interna correcta.
- Se conserva el formulario de contacto con Web3Forms.
- Se fijó el favicon en URL absoluta del dominio para evitar solicitudes erróneas en rutas internas (ej. `/proyectos/favicon.svg`).

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build:pages
```

Este comando:

1. Genera `dist/` con Vite.
2. Verifica que el artefacto de Pages contiene únicamente archivos compilados (sin `src/` sin compilar).

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml`:

1. Ejecuta `npm ci`.
2. Ejecuta `npm run build:pages`.
3. Publica `dist/` con `actions/upload-pages-artifact` + `actions/deploy-pages`.

Para que funcione en producción:

- En GitHub Settings → Pages, seleccionar **Build and deployment: GitHub Actions**.
- Mantener el archivo `public/CNAME` con `mendietastudio.com`.
