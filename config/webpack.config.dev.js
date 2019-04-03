/* eslint-disable */
var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var autoprefixer = require("autoprefixer");

var config = require("./config");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: ["webpack-dev-server/client?", "webpack/hot/dev-server", "./src/index.js"],
  output: {
    publicPath: "/",
    path: __dirname + "/static/js/",
    filename: "main.js",
    devtoolModuleFilenameTemplate: (info) =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  browsers: ["ie >= 8", "last 4 version"],
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/media/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:" + config.port],
        notes: ["^_^ ./"],
      },
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
