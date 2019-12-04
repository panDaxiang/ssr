const path = require("path");

const resolve = url => path.resolve(__dirname, url);

module.exports = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@components": resolve("../src/components"),
      "@pages": resolve("../src/pages"),
      "@store": resolve("../src/store")
    }
  }
};
