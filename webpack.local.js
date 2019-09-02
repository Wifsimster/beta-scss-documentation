const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    compress: true,
    port: 9003,
    open: true,
    hot: true
  }
})
