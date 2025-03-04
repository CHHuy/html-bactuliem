"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    homePage: ["./src/js/main.js", "./src/js/home/index.js"],
    categoryPage: ["./src/js/main.js", "./src/js/category/index.js"],
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
      title: "Trang chủ",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["homePage"],
    }),
    new HtmlWebpackPlugin({
      title: "Category",
      filename: "category.html",
      template: "./src/category.html",
      chunks: ["categoryPage"],
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
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
};
