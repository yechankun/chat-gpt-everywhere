import { defineConfig, UserConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import terser from '@rollup/plugin-terser';

import path from 'path';
import manifest from './src/manifest';

export default defineConfig(({ mode }) => {
  const production = mode === 'production';

  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
          plugins: [
            production &&
              terser({
                compress: {
                  drop_console: true,
                },
              }),
          ],
        },
      },
    },
    plugins: [svelte(), crx({ manifest })],
    resolve: {
      alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    },
  } as unknown as UserConfig;
});
