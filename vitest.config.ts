/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths(), svgr(), VitePWA()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setUpTests.ts',
    include: ['**/*.test.ts?(x)'],
  },
});
