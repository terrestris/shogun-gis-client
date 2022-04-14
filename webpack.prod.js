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
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        },
        common: {
          name: 'common',
          test: /[\\/]src[\\/]/,
          chunks: 'all',
          minSize: 0
        }
      }
    },
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
});
