const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const baseConfig = require("./webpack.electron.base.config");

module.exports = merge.smart(baseConfig, {
  target: "electron-main",
  entry: {
    main: "./src/electron/main.ts"
  },
  module: {
    rules: [
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
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ["src/main/**/*"]
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    })
  ]
});
