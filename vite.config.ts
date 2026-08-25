import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Rutas relativas: funciona tanto en la raíz (dominio propio) como en /repo-name/ (github.io)
  build: {
    // Target modern browsers only: avoids esbuild/plugin polyfills and syntax
    // downleveling for legacy engines nobody visiting this site is using.
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        // Split third-party deps into their own chunk so app code changes
        // don't invalidate the (rarely-changing) vendor cache entry.
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
