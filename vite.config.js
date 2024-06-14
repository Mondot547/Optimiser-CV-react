import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['@fortawesome/fontawesome-svg-core', 'leaflet'],
    },
  },
  server: {
    sourcemap: false,
  },
});
