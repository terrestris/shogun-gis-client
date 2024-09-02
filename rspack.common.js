const path = require('path');

const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');
const rspack = require('@rspack/core');

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  externals: {
    clientConfig: 'clientConfig'
  },
  module: {
    rules: [{
      test: /\.m?js/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    }, {
      test: /\.(j|t)s$/,
      exclude: [/[\\/]node_modules[\\/]/],
      loader: 'builtin:swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript'
          },
          externalHelpers: true
        },
        env: {
          targets: 'Chrome >= 48'
        }
      }
    }, {
      test: /\.tsx$/,
      loader: 'builtin:swc-loader',
      exclude: [/[\\/]node_modules[\\/]/],
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          },
          externalHelpers: true
        },
        env: {
          targets: 'Chrome >= 48'
        }
      }
    }, {
      test: /\.d\.ts$/,
      loader: 'ignore-loader'
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
      '.js',
      '.cjs',
      '.mjs'
    ],
    fallback: {
      buffer: require.resolve('buffer/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'auto',
    clean: true
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      filename: 'index.html',
      title: 'SHOGun Client',
      template: path.join(__dirname, 'resources', 'template', 'index.ejs'),
      templateParameters: {
        appPrefix: process.env.HTML_BASE_URL ?? ''
      },
      favicon: path.join(__dirname, 'resources', 'public', 'favicon.ico'),
      meta: {
        charset: 'utf-8',
        viewport: 'user-scalable=no, width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new rspack.CopyRspackPlugin({
      patterns: [{
        from: path.join(__dirname, 'resources', 'config', 'gis-client-config.js'),
        to: '.'
      }, {
        from: path.join(__dirname, 'node_modules', 'monaco-editor', 'min', 'vs'),
        to: 'vs'
      }]
    }),
    new rspack.DefinePlugin({
      PROJECT_VERSION: JSON.stringify(require('./package.json').version),
      KEYCLOAK_HOST: JSON.stringify(process.env.KEYCLOAK_HOST),
      KEYCLOAK_REALM: JSON.stringify(process.env.KEYCLOAK_REALM),
      KEYCLOAK_CLIENT_ID: JSON.stringify(process.env.KEYCLOAK_CLIENT_ID)
    }),
    new rspack.ProvidePlugin({
      Buffer: [
        'buffer',
        'Buffer'
      ]
    }),
    new ModuleFederationPlugin({
      name: 'SHOGunGISClient',
      dev: false,
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'react-redux': {
          singleton: true,
          requiredVersion: deps['react-redux']
        },
        '@terrestris/react-geo/': {
          singleton: true,
          requiredVersion: deps['@terrestris/react-geo']
        },
        'react-i18next': {
          singleton: true,
          requiredVersion: deps['react-i18next']
        },
        'ol/': {
          singleton: true,
          requiredVersion: deps.ol
        }
      }
    })
  ],
  experiments: {
    css: true
  }
};
