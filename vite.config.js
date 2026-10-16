import { defineConfig } from 'vite';

export default defineConfig({
  // relative base so the build works on Firebase, GitHub Pages (project
  // pages too) and Cloudflare Pages without config changes
  base: './',
});
