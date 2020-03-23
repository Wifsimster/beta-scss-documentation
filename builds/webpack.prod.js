/* eslint-disable no-undef */
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/beta-scss-documentation/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
