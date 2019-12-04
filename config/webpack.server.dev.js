const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");

const resolve = url => path.resolve(__dirname, url);

const config = require("./webpack.base");
const serverConfig = {
  target: "node",
  mode: "development",
  entry: {
    index: resolve("../src/server/index.js")
  },
  output: {
    path: resolve("../dist"),
    filename: "bundle.js"
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(serverConfig, config);
