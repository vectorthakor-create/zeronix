import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function sitemapPlugin(): Plugin {
  return {
    name: 'serve-sitemap-xml',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/sitemap.xml') {
          const filePath = path.resolve(__dirname, 'public/sitemap.xml');
          if (fs.existsSync(filePath)) {
            const xml = fs.readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return res.end(xml);
          }
        }
        if (url === '/robots.txt') {
          const filePath = path.resolve(__dirname, 'public/robots.txt');
          if (fs.existsSync(filePath)) {
            const txt = fs.readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return res.end(txt);
          }
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/sitemap.xml') {
          const filePath = path.resolve(__dirname, 'dist/sitemap.xml');
          if (fs.existsSync(filePath)) {
            const xml = fs.readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return res.end(xml);
          }
        }
        if (url === '/robots.txt') {
          const filePath = path.resolve(__dirname, 'dist/robots.txt');
          if (fs.existsSync(filePath)) {
            const txt = fs.readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            return res.end(txt);
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), sitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
