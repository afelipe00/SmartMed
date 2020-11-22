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
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
                //use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    }
                ],
                option: {
                    name: '[name].[ext]'
                }

            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCSSExtractPlugin()
    ]
}