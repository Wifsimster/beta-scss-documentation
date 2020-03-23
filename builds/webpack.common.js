/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const packageJson = require('../package.json')

module.exports = {
  entry: [path.join(__dirname, '../src/app')],
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, '../docs'),
    publicPath: '/'
  },
  devtool: 'none',
  resolve: {
    modules: [path.join(__dirname, '../src/'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      img: path.join(__dirname, '../static/img/'),
      fonts: path.join(__dirname, '../static/fonts/'),
      components: path.join(__dirname, '../src/components/'),
      pages: path.join(__dirname, '../src/pages/'),
      router: path.join(__dirname, '../src/router/'),
      scss: path.join(__dirname, '../src/scss/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      BUILD_DATE: JSON.stringify(new Date())
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, use: [{ loader: 'vue-html-loader' }] },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|eot|otf|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]'
        }
      }
    ]
  }
}
