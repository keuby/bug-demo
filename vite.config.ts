import { defineConfig } from 'vite';
import jsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    jsx(),
    legacy({
      targets: ['defaults'],
      polyfills: ['es.object.values'],
    }),
  ],
  build: {
    cssCodeSplit: false,
  },
});
