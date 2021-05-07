import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    legacy({
      targets: ['defaults'],
      polyfills: [
        'es.promise',
        'es.symbol',
        'es.symbol.iterator',
        'es.symbol.description',
        'es.array.from',
        'es.symbol.iterator',
        'es.object.to-string',
        'es.object.keys',
        'es.array.slice',
      ],
    }),
  ],
  build: {
    minify: false,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
        },
      },
    },
  },
});
