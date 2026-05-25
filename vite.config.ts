import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  base: '/', // Asegura que las rutas de los archivos estáticos sean absolutas
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
});