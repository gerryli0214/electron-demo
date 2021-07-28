const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './web/src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../webPackage'),
        filename: '[name].[hash].js',
        // 在源码表中使用绝对路径 (对于在 IDE 中调试时很重要)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    devtool: 'inline-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../web"),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader' , 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader' , 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }, {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            },
            {
                
                test: /\.(jpg|png|gif|woff|woff2|svg|ttf|eot)$/,
                use: ['url-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new VueLoaderPlugin()
    ],
    externals: [nodeExternals()]
}