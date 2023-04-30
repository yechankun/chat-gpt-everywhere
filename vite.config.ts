import { defineConfig, UserConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import terser from '@rollup/plugin-terser';
import { imagetools } from 'vite-imagetools';
import { base64, base64Metadata } from './src/utils/imagetools-base64';

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
        },
      },
    },
    plugins: [
      svelte({
        onwarn: (warning, handler) => {
          const { code, frame } = warning;
          if (code === 'css-unused-selector') return;

          handler(warning);
        },
        emitCss: false,
      }),
      crx({ manifest }),
      production &&
        terser({
          compress: {
            drop_console: true,
          },
        }),
      imagetools({
        extendOutputFormats: (builtinOutputFormats) => ({
          ...builtinOutputFormats,
          run: base64Metadata,
        }),
        extendTransforms: (builtins) => [base64, ...builtins],
      }),
    ],
    resolve: {
      alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    },
  } as unknown as UserConfig;
});
