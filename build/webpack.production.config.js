process.env.NODE_ENV = 'production'

const webpack = require("webpack")
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: "production",
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