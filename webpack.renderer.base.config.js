const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.electron.base.config");

module.exports = merge.smart(baseConfig, {
  target: "electron-renderer",
  entry: {
    app: ["@babel/polyfill","./src/app/index.tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions " } }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/transform-runtime"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions " } }
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/transform-runtime"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ["src/app/**/*"]
    }),
    new CopyPlugin([
      {from: "./assets/", to: "assets"},
    ]),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
      inject: true,
      title: "Order Worksheet Parser",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    })
  ]
});
