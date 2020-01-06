const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const HappyPack = require('happypack');

const devMode = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV)

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: "./app/src/main.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          // loader: "happypack/loader",
          options: {
            plugins: ['lodash'],
            presets: [
              "@babel/preset-env"
            ]
          }
        },
        exclude: /node_modules/
      }, {
        test: /(\.vue)$/,
        loader: 'vue-loader',
      }, {
        test: /\.(le|c)ss$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader: 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(gif|jpg|jpeg|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[hash:6].[ext]'
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new LodashModuleReplacementPlugin(),
    // new HappyPack({
    //   // 3) re-add the loaders you replaced above in #1:
    //   loaders: [ 'babel-loader' ],
    //   threads: 4
    // })
  ]
}