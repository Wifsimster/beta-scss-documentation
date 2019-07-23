const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: [path.resolve('src/app.js')],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: 'docs/'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      fonts: path.resolve(__dirname, 'src/fonts/'),
      plugins: path.resolve(__dirname, 'src/plugins/'),
      scss: path.resolve(__dirname, 'src/scss/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      BUILD_DATE: JSON.stringify(new Date())
    })
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, use: [{ loader: 'vue-html-loader' }] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192&name=../img/[name].[ext]' },
      { test: /\.(woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'file-loader?name=../fonts/[name].[ext]' }
    ]
  }
}
