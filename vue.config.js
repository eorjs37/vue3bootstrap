// 경로: 루트 디렉토리/vue.config.js
// eslint-disable-next-line prettier/prettier
const path = require("path");
// eslint-disable-next-line no-undef
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '~@/assets/scss/_variabled.scss';
          @import '~@/assets/scss/common.scss';`,
      },
    },
  },
};
