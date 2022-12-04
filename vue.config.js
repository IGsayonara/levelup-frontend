const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '~bootstrap-scss/_functions.scss';
          @import '~bootstrap-scss/_mixins.scss';
          @import '~bootstrap-scss/_variables.scss';
          @import '@/styles/global-colors.scss';
        `,
      },
    },
  },
});
