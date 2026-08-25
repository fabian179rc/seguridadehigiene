import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Rutas relativas: funciona tanto en la raíz (dominio propio) como en /repo-name/ (github.io)
  build: {
    // Target modern browsers only: avoids esbuild/plugin polyfills and syntax
    // downleveling for legacy engines nobody visiting this site is using.
    target: "es2020",
  },
});
