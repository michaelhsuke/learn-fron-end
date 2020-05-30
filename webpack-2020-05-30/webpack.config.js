const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizCss = require('optimize-css-assets-webpack-plugin')
const uglifyJS = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  optimization: {
    minimizer: [
      new uglifyJS({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizCss()
    ]
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: './dist',
    compress: true
  },
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // filename: '[name].[hash:8].js',
    // publicPath: 'https://weixin.10010js.com'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         enforce: 'pre'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.html$/,
        use: {
          loader: 'html-withimg-loader',
        }
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            esModule: false,
            outputPath: '/img/',
            publicPath: 'https://weixin.10010js.com'
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',  // a.js:13 Uncaught ReferenceError: regeneratorRuntime is not defined解决
              ]
            }
          }
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     // injectType: 'linkTag',
          //     insert: 'body'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', 
          'css-loader',
          'less-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // minify: {
      //   // removeAttributeQuotes: true,
      //   // collapseWhitespace: true,
      // },
      hash: true,
      minify: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ]
}