const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ["babel-polyfill","./src/index.js"],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader",'sass-loader']
                })
            },
            {
                test:/\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template:'./index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextWebpackPlugin('css/style.css')
    ],
    devServer: {
        contentBase: './',
        hot:true,
        inline:true,
        overlay: true,
        host:'127.0.0.1',
        historyApiFallback:true
    }
}