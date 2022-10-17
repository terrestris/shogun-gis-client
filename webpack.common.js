const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
    path: path.resolve(__dirname, 'build'),
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
      PROJECT_VERSION: JSON.stringify(require('./package.json').version),
      KEYCLOAK_HOST: JSON.stringify(process.env.KEYCLOAK_HOST),
      KEYCLOAK_REALM: JSON.stringify(process.env.KEYCLOAK_REALM),
      KEYCLOAK_CLIENT_ID: JSON.stringify(process.env.KEYCLOAK_CLIENT_ID)
    }),
    new ModuleFederationPlugin({
      name: 'SHOGunGISClient',
      shared: {
        ...require('./package.json').dependencies,
        'react': {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        'react-redux': {
          singleton: true
        },
        '@terrestris/react-geo': {
          singleton: true
        },
        'react-i18next': {
          singleton: true
        },
        'ol': {
          singleton: true
        },
        'ol/layer/': {
          singleton: true
        },
        'ol/interaction/': {
          singleton: true
        },
        'ol/control/': {
          singleton: true
        },
        'ol/render/': {
          singleton: true
        },
        'ol/geom/': {
          singleton: true
        },
        'ol/style/': {
          singleton: true
        },
        'ol/source/': {
          singleton: true
        },
        '@reduxjs/toolkit': {
          singleton: true
        }
      }
    })
  ]
};
