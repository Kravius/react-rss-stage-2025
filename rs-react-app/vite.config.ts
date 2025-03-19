import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@services": path.resolve(__dirname, "src/services"),
      "@components": path.resolve(__dirname, "src/components"),
      "@store": path.resolve(__dirname, "src/store"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@type": path.resolve(__dirname, "src/type"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
