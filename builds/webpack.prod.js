/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  output: {
    filename: 'static/js/[name].[hash].js',
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/beta-scss-documentation/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
