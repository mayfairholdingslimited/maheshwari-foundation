import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// gh-pages-preview branch: static-only build for GitHub Pages (no server
// runtime there), so the Vercel adapter and the two server-rendered routes
// (/admin, /api/counter) are dropped on this branch. Root-absolute asset
// paths get prefixed for the Pages subpath in the deploy workflow's
// post-build step, not here.
export default defineConfig({
  site: 'https://mayfairholdingslimited.github.io/maheshwari-foundation',
  vite: {
    plugins: [tailwindcss()],
  },
});
