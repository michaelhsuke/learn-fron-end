const path = require('path')

module.exports = {
  // mode: "production",
  mode: "development",
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  } 
}