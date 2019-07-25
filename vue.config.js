const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, '../src/styles'),
        '@public': path.resolve(__dirname, './public'),
        '@services': path.resolve(__dirname, './src/assets/services')
      }
    }
  }
}
