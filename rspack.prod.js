const path = require('path');

const rspack = require('@rspack/core');
const { merge } = require('webpack-merge');

const common = require('./rspack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        rspack.CssExtractRspackPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        rspack.CssExtractRspackPlugin.loader,
        {
          loader: 'css-loader'
        }
      ]
    }]
  },
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'resources', 'public'),
          to: '.'
        }
      ]
    }),
    new rspack.CssExtractRspackPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: true
    })
  ].filter(Boolean),
  output: {
    filename: '[name].[contenthash].js'
  },
  experiments: {
    // CssExtractRspackPlugin is not compatible with the native css support.
    css: false
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  }
});
