# Invitación — Victoria cumple 9 años

Sitio estático animado (GSAP + canvas-confetti locales en `assets/vendor`, música con Web Audio).

## Deploy en Vercel
- **CLI:** `npx vercel` (preview) → `npx vercel --prod` (producción), desde esta carpeta.
- **Git:** sube esta carpeta a un repo e impórtalo en Vercel. Si el repo contiene más cosas, pon *Root Directory* = esta carpeta.

`vercel.json` ya define build (`npm run build`), salida (`dist/`), caché y `noindex`.
El build pone la URL absoluta en los metadatos Open Graph (vista previa de WhatsApp) usando
`VERCEL_PROJECT_PRODUCTION_URL`. Con dominio propio, define la variable `SITE_URL=https://tu-dominio.com`.

## Local
`npm run dev` → http://localhost:8765 · `npm run build` genera `dist/`.
