import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.maheshwarifoundation.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
