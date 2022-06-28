const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  externals: {
    clientConfig: 'clientConfig'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules|\.d\.ts$/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.d\.ts$/,
      loader: 'ignore-loader'
    }, {
      test: /\.less|\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]
    }, {
      test: /\.(jpe?g|png|gif|ico|pdf|eot|svg|ttf|woff(2)?)$/,
      type: 'asset/resource'
    }]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'SHOGun Client',
      template: path.join(__dirname, 'resources', 'public', 'index.ejs'),
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname, 'resources', 'config', 'gis-client-config.js'),
        to: '.'
      }]
    }),
    new webpack.DefinePlugin({
      KEYCLOAK_HOST: JSON.stringify(process.env.KEYCLOAK_HOST),
      KEYCLOAK_REALM: JSON.stringify(process.env.KEYCLOAK_REALM),
      KEYCLOAK_CLIENT_ID: JSON.stringify(process.env.KEYCLOAK_CLIENT_ID)
    })
  ]
};
