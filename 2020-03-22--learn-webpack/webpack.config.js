const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    port: 3000,
    contentBase: './dist',
    progress: true
  },
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname + '/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     // insert: 'top'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: loader => {
          //       require('autoprefixer')()
          //     }
          //   }
          // },
        ]
      },
      {  // node-sass sass-loader
        // stylus stylus-loader
        test: /\.less$/, use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     // insert: 'top'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: loader => {
          //       require('autoprefixer')()
          //     }
          //   }
          // },
        ]
      },
    ]
  }
}