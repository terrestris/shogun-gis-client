const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'resources/img',
          to: 'img'
        }
      ]
    })
  ]
});
