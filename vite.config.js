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
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'img/letra-f.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'img/letra-f-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'img/letra-f-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'img/screenshot1.png',
            sizes: '1080x539',
            type: 'image/png',
            form_factor: 'wide', // Para pantallas anchas
          },
          {
            src: 'img/screenshot2.png',
            sizes: '1080x539',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,json}'],
      }
    }),
  ],
});