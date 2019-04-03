/* eslint-disable */
const path = require("path");
const fs = require("fs");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");

const paths = require("../paths");
var configWebpack = require("../webpack.config.dev");
var config = require("../config");

var devServer = new webpackDevServer(webpack(configWebpack), {
  publicPath: configWebpack.output.publicPath,
  contentBase: "public/",
  inline: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
  stats: {
    // copied from `'minimal'`
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    // our additional options
    moduleTrace: true,
    errorDetails: true,
    colors: true,
    depth: false,
  },
  noInfo: true,
  quiet: true,
  clientLogLevel: "none",
  headers: { "Access-Control-Allow-Origin": "*" },
  before(app) {
    // This lets us open files from the runtime error overlay.
    app.use(errorOverlayMiddleware());
  },
  // Load proxy config
  proxy: require(paths.appPackageJson).proxy,
});

devServer.listen(config.port, function(err, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening on port 3000 ^_^ ./");
});
