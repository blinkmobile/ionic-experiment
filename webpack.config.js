'use strict';

// Node.js built-ins

var path = require('path');

// foreign modules

var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');

// this module

module.exports = {
  context: path.join(__dirname, 'www'),
  devtool: 'source-map',
  entry: ['./js/app.js'],
  externals: {
    'angular': 'var angular'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:8]' },
      { test: /\.html?$/, loader: 'html-loader' },
      { exclude: /localforage/, test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  plugins: [
    new ngAnnotatePlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
