const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    // other: './src/other.js',
  },
  devServer: {
    before(app) {
      app.get('/user', (req, res) => {
        res.json({ name: 'xuke1028' })
      })
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    mainFields: ['style', 'main'],
    extensions: ['.css', '.js', '.json']
    // alias: {
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',
  // watch: true,
  // watchOptions: {
  //   poll: 1000,
  //   aggregateTimeout: 500,
  //   ignored: /node_modules/
  // },
  plugins: [
    new webpack.DefinePlugin({
      DEV: "'dev'"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // chunks: ['index']
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'other.html',
    //   chunks: ['other']
    // })
    new CopyWebpackPlugin({
      patterns: [{ from: './doc', to: './doc' }]
    }),
    new webpack.BannerPlugin('made by xuke'),
    
  ]
}