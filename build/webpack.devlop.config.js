process.env.NODE_ENV = 'development'

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports  = merge(baseConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    //端口号
    port: '8080',
    inline: true,
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true//允许热加载
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})