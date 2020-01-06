process.env.NODE_ENV = 'production'

const webpack = require("webpack")
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: "production",
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // maxInitialRequests: Infinity,
            // minSize: 0,
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name(module) {
            //             // 获取第三方包名
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            //
            //             // npm 软件包名称是 URL 安全的，但是某些服务器不喜欢@符号
            //             return `npm.${packageName.replace('@', '')}`;
            //         },
            //     },
            // },
        },
      // minimizer: [
      //   new TerserPlugin({
      //       cache: true,
      //       parallel: true,
      //       sourceMap: true,
      //   }),
      // ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../app/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: '[name][hash].css',
            chunkFilename: "[id].css"
        }),
      // webpack4默认使用terser-webpack-plugin 替代 uglifyjs-webpack-plugin
        new UglifyJsPlugin({
            //启用文件缓存
            cache: true,
            //使用多线程并行运行提高构建速度
            parallel: true,
            //使用 SourceMaps 将错误信息的位置映射到模块
            sourceMap: true
        })
    ]
})