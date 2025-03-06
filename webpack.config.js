"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    homePage: ["./src/js/main.js", "./src/js/home/index.js"],
    postPage: ["./src/js/main.js", "./src/js/post/index.js"],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    watchFiles: ["./src/**/*"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["homePage"],
    }),
    new HtmlWebpackPlugin({
      filename: "post.html",
      template: "./src/post.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",
      template: "./src/news.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "news_2.html",
      template: "./src/news_2.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "news_detail.html",
      template: "./src/news_detail.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "document.html",
      template: "./src/document.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "diagram.html",
      template: "./src/diagram.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "list.html",
      template: "./src/list.html",
      chunks: ["postPage"],
    }),
    new HtmlWebpackPlugin({
      filename: "list_2.html",
      template: "./src/list_2.html",
      chunks: ["postPage"],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/uploads", to: "./uploads" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              // https://github.com/webpack-contrib/sass-loader#sassoptions
              sassOptions: {
                // If set to true, Sass won’t print warnings that are caused by dependencies (like bootstrap):
                // https://sass-lang.com/documentation/js-api/interfaces/options/#quietDeps
                quietDeps: true,
                silenceDeprecations: ["import", "global-builtin"],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset",
        generator: {
          filename: "third_party/fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: "uploads/[name][ext]",
        },
      },
    ],
  },
};
