import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['tests/unit/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: [
      { find: '@/config', replacement: resolve(import.meta.dirname, 'src/config') },
      { find: '@/types', replacement: resolve(import.meta.dirname, 'src/types') },
      { find: '@/lib', replacement: resolve(import.meta.dirname, 'src/lib') },
      { find: '@/hooks', replacement: resolve(import.meta.dirname, 'src/hooks') },
      { find: '@/components', replacement: resolve(import.meta.dirname, 'src/components') },
      { find: '@', replacement: resolve(import.meta.dirname, '.') },
    ],
  },
});
