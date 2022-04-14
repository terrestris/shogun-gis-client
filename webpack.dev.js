const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    server: 'https',
    hot: true,
    static: path.join(__dirname, 'resources', 'public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
});
