import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '',
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      manifest: {
        name: 'Российская Диск-Гольф Ассоциация',
        short_name: 'РДГА',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        theme_color: '#fbcd04',
        background_color: '#fbcd04',
        start_url: '/',
        display: 'standalone',
      },
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts'
    }),

  ],
  server: {
    open: true,
    port: 3000,
  },
});
