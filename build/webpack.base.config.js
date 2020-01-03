const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV)

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: "./app/src/main.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].[hash:8].js"
  },
  performance: {
    hints: devMode ? "error": 'warning',
    maxEntrypointSize: 3000000,
    maxAssetSize: 1000000
  },
  optimization:{
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
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
    new VueLoaderPlugin()
  ]
}