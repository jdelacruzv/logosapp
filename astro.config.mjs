// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: 'server', // <--- 2. Cambia a modo servidor
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false, // Esto desactiva el menú inferior por completo
  },
});
