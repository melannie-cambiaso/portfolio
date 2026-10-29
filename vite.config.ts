import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves under /portfolio/; Vercel serves from the domain root.
  base: process.env.VERCEL ? "/" : "/portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
