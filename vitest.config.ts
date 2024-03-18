/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.ts?(x)'],
    coverage: {
      reporter: ['lcov'],
    },
  },
});
