/* eslint-disable */
var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var TerserPlugin = require("terser-webpack-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    filename: "static/js/main.js",
    path: path.join(__dirname, "../docs"),
    publicPath: "/",
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              localIdentName: "[local]__[hash:8]",
            },
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
              name: "[name].[hash:8].[ext]",
              outputPath: "static/media/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].css",
    }),
    new CopyWebpackPlugin([{ from: "public" }]),
  ],
};
