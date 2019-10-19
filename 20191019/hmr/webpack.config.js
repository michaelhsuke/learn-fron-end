// https://zhuanlan.zhihu.com/p/30669007

const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/')
  },
  devServer: {
    hot: true
  }
}