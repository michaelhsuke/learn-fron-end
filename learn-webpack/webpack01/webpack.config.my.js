const path = require('path')

module.exports = {
  devServer: {
    port: 3000,
    progress: true,
    contentBase: './build',
    compress: true
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}