import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
          new URL('./src/components/$1/index.vue', import.meta.url)
        ),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'bootstrap-scss/_functions.scss';
          @import 'bootstrap-scss/_mixins.scss';
          @import 'bootstrap-scss/_variables.scss';
          @import '@/styles/global-colors.scss';
        `,
      },
    },
  },
});
