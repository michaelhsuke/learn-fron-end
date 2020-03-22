const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // optimization: {
  //   minimizer: [
  //     new OptimizeCss(),
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true
  //     })
  //   ]
  // },
  devServer: {
    port: 3000,
    contentBase: './dist',
    progress: true
  },
  mode: "development",
  // mode: "production",
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
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: '[name].[hash:8].[ext]',
      //         // limt: 1000*10000,
      //         limt: 1,
      //         // outputPath: 'images',
      //         publicPath: 'image/',
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              outputPath: 'static',
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      // {
      //   test: /png|jpg|svg|gif$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'image/[name].[hash:8].[ext]'
      //       }
      //     }

      //   ]
      // },
      {
        test: /\.js$/,
        use: { // eslint eslint-loader
          loader: 'eslint-loader',
          options: {
            enforce: 'pre'  // previous
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime'
            ]
          },
        },
        include: path.resolve(__dirname + '/src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
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