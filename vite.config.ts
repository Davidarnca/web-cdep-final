import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Esto obliga a construir una SPA (Single Page Application)
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html"
    }
  }
});