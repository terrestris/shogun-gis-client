const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {
  merge
} = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    server: 'http',
    port: 8080,
    client: {
      webSocketURL: 'http://0.0.0.0:0/client/ws'
    },
    hot: true,
    static: path.join(__dirname, 'resources', 'public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
});
