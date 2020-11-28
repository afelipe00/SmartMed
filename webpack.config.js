// eslint-disable-next-line no-unused-vars
let webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/app/main.js',
    output: {
        path: __dirname + '/public' + '/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "url-loader",
                options:{
                    name: "[name].[ext]?[hash]",
                    esModule: false
                }
            },
        ]
    },
    devServer:{
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance:{
        hints: false
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCSSExtractPlugin()

    ]
};