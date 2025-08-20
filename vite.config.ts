import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { patchCssModules } from 'vite-css-modules';

const manifest: Partial<ManifestOptions> = {
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
};

export default defineConfig(() => {
  const plugins = [
    react(),
    viteTsconfigPaths(),
    svgr(),
    patchCssModules({
      generateSourceTypes: true,
    }),
    VitePWA({
      registerType: 'prompt',
      injectRegister: null,
      manifest,
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts',
    }),
    MillionLint.vite(),
  ];

  return {
    base: '/',
    plugins,
    server: {
      open: true,
      port: 3000,
    },
    build: {
      assetsInlineLimit: 0,
    },
  };
});
