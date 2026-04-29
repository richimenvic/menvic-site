# Menvic — Sitio Web

Sitio web oficial de Menvic, desarrollado con React + Vite y desplegado mediante GitHub Pages con dominio personalizado `menvic.com`.

Este proyecto parte de la estructura técnica de Mendieta Studio y se adapta como una web independiente para la marca Menvic.

## Estado del proyecto

- Repositorio independiente para `menvic.com`.
- Base técnica con React + Vite.
- Despliegue previsto mediante GitHub Pages y GitHub Actions.
- Dominio personalizado: `menvic.com`.
- Pendiente de adaptar contenido, identidad visual, textos, imágenes, SEO y datos legales a Menvic.

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
2. Verifica que el artefacto de Pages contiene únicamente archivos compilados.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml`:

1. Ejecuta `npm ci`.
2. Ejecuta `npm run build:pages`.
3. Publica `dist/` con `actions/upload-pages-artifact` + `actions/deploy-pages`.

Para que funcione en producción:

- En GitHub Settings → Pages, seleccionar **Build and deployment: GitHub Actions**.
- Mantener el archivo `public/CNAME` con `menvic.com`.
- Revisar que el archivo `CNAME`, si existe en la raíz del repositorio, también apunte a `menvic.com`.

## Próximos pasos

1. Sustituir la marca Mendieta Studio por Menvic en la interfaz.
2. Revisar títulos, metadescripciones y textos SEO.
3. Actualizar imágenes, favicon y datos de contacto.
4. Revisar aviso legal y política de privacidad para que correspondan a Menvic.
5. Conectar el dominio `menvic.com` desde el proveedor DNS.
