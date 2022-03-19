'use strict';

require('dotenv').config();

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/frontend/index.js'),
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment && 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, './src/frontend'),
        use: [{
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    clean: true
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 3005,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Blog App',
      template: './src/frontend/public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_API_URL': JSON.stringify(process.env.REACT_API_URL)
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean)
};

