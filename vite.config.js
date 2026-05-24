import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hcd-test/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
