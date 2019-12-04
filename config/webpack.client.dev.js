const path = require("path");
const merge = require("webpack-merge");

const resolve = url => path.resolve(__dirname, url);

const config = require("./webpack.base");

const clientConfig = {
  mode: "development",
  entry: {
    index: resolve("../src/client/index.js")
  },
  output: {
    path: resolve("../public"),
    filename: "index.js"
  }
};

module.exports = merge(clientConfig, config);
