var path = require('path');
var TapWebpackPlugin = require('tap-webpack-plugin');
var glob = require("glob");

module.exports = {
  target: 'node',

  entry: glob.sync('./src/app/*.tape.js'),

  output: {
    filename: '[name].test.js',
    path: path.resolve(__dirname, './src/tests')
  },

  plugins: [
    new TapWebpackPlugin({ reporter: 'tap-spec' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  }
}
