const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {
  merge
} = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: process.env.DEVTOOL ?? 'inline-source-map',
  devServer: {
    historyApiFallback: process.env.HISTORY_FALLBACK_API ? JSON.parse(process.env.HISTORY_FALLBACK_API) : false,
    server: 'http',
    port: 8080,
    client: {
      webSocketURL: process.env.WEB_SOCKET_URL ?? 'http://0.0.0.0:0/client/ws'
    },
    hot: true,
    static: path.join(__dirname, 'resources', 'public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
});
