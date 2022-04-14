const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const customCssTheme = require('./antd.theme');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.less|\.css$/,
        use: [
          {
            // Creates style nodes from JS strings
            loader: 'style-loader'
          },
          {
            // Translates CSS into CommonJS
            loader: 'css-loader'
          },
          {
            // Compiles Less to CSS
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: customCssTheme,
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|pdf|eot|svg|ttf|woff(2)?)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      template: path.join(__dirname, 'resources', 'public', 'index.ejs'),
      hash: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin()
  ]
};
