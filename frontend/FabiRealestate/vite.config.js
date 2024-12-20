import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from "./public/manifest.json"


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://u09-fullstack-js-simretn.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: manifest,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,svg,png}"]
      }
    })
  ],
});
