const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const OUTPUT_PATH = 'dist';

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, OUTPUT_PATH),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      }
    ]
  },
  plugins: [
    new CleanWebPackPlugin([OUTPUT_PATH]),
    new HtmlWebPackPlugin({
      title: 'Web Pack V4',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};
