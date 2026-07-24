const path = require('path');

const reactRefresh = require('@rspack/plugin-react-refresh');
const ReactRefreshPlugin = reactRefresh.ReactRefreshRspackPlugin || reactRefresh.default || reactRefresh;
const { merge } = require('webpack-merge');

const common = require('./rspack.common.js');

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
    allowedHosts: 'all',
    static: path.join(__dirname, 'resources', 'public')
  },
  module: {
    rules: [{
      test: /\.less$/,
      type: 'css/auto',
      use: [{
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]
    }]
  },
  plugins: [
    new ReactRefreshPlugin()
  ],
  lazyCompilation: false // REMOVE WHEN FIXED IN RSPACK
});
