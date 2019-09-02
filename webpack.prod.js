const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "docs/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
})
