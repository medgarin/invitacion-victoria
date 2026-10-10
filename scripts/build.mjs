// Copia el sitio a dist/ y pone la URL absoluta en los metadatos (necesaria para la vista previa de WhatsApp).
// Prioridad: SITE_URL (dominio propio) → dominio de producción de Vercel → URL del deploy.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || '';
const site = host ? (host.startsWith('http') ? host : `https://${host}`).replace(/\/+$/, '') : '';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('assets', 'dist/assets', { recursive: true });
cpSync('robots.txt', 'dist/robots.txt');
writeFileSync('dist/index.html', readFileSync('index.html', 'utf8').replaceAll('__SITE_URL__', site));

console.log(site ? `✔ Metadatos con ${site}` : '⚠ Sin SITE_URL: los metadatos quedan con rutas relativas');
