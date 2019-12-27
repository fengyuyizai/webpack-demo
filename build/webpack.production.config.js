const webpack = require("webpack")
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    context: path.resolve(__dirname, '../'),
    mode: "production",
    devtool: 'source-map',
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
                    MiniCssExtractPlugin.loader,

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
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../app/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: '[name][hash].css',
            chunkFilename: "[id].css"
        }),
    ]
}