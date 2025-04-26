import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import { VitePWA } from 'vite-plugin-pwa'; // 

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Futurama App',
        short_name: 'Futurama',
        description: 'Aplicación de Futurama PWA',
        theme_color: '#007bff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});