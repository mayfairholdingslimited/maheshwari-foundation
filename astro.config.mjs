import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.maheshwarifoundation.com',
  // Output stays static by default; only /admin and /api/* opt into
  // server rendering via `export const prerender = false`.
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
