const path = require('path');
const sharedConfig = require('./webpack.shared.config');

const devConfig = {
  ...sharedConfig,
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

module.exports = devConfig;
