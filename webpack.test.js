var path = require('path');
var TapWebpackPlugin = require('tap-webpack-plugin');
var glob = require("glob");

module.exports = {
  target: 'node',

  entry: glob.sync('./src/app/**/*.test.js'),

  output: {
    filename: '[name].test.js',
    path: path.resolve(__dirname, './src/tests')
  },

  plugins: [
    new TapWebpackPlugin({ reporter: 'tap-spec' })
  ],

  stats: {
    minimal: true,
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    publicPath: false,
    verbose: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  }
}
