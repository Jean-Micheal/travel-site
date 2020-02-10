const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  devServer: {
    before: function(app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i, // tell webpack to access files that ends with .class
        use: ["style-loader", "css-loader?url=false", {loader: "postcss-loader", options: {plugins: postCSSPlugins}}] // allows webpack to load css and apply the styles to laoder
      }
    ]
  }
};
