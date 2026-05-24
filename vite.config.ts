import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Cambiamos el modo a estático para que Vercel no busque un servidor
  build: {
    outDir: "dist",
  },
});