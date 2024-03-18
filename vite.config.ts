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
      injectRegister: null,
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
});
