const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  externals: {
    clientConfig: 'clientConfig'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      include: /node_modules\/@terrestris/,
      resolve: {
        fullySpecified: false
      }
    }, {
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
    alias: {
      fs: false,
      path: false
    },
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    fallback: {
      buffer: require.resolve('buffer/')
    }
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
      appPrefix: process.env.HTML_BASE_URL ?? '',
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
      }, {
        from: './node_modules/monaco-editor/min/vs',
        to: 'vs'
      }]
    }),
    new webpack.DefinePlugin({
      PROJECT_VERSION: JSON.stringify(require('./package.json').version),
      KEYCLOAK_HOST: JSON.stringify(process.env.KEYCLOAK_HOST),
      KEYCLOAK_REALM: JSON.stringify(process.env.KEYCLOAK_REALM),
      KEYCLOAK_CLIENT_ID: JSON.stringify(process.env.KEYCLOAK_CLIENT_ID)
    }),
    new webpack.ProvidePlugin({
      Buffer: [
        'buffer',
        'Buffer'
      ]
    }),
    new ModuleFederationPlugin({
      name: 'SHOGunGISClient',
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        },
        'react-redux': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-redux']
        },
        '@terrestris/react-geo/': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@terrestris/react-geo']
        },
        'react-i18next': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-i18next']
        },
        'ol/': {
          singleton: true,
          eager: true,
          requiredVersion: deps.ol
        }
      }
    })
  ]
};
