const webpack = require("webpack")
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

console.log("------------------------------")
console.log(path.resolve(__dirname, '../dist'))
console.log("------------------------------")

module.exports = {
    context: path.resolve(__dirname, '../'),
    // mode: "development",
    // devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, "../app/src/main.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundles.js"
    },
    devServer: {
        contentBase: "/dist",
        historyApiFallback: true,
        inline: true
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../app/index.html")
        })
    ]
}