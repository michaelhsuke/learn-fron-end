const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}