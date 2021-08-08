const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './web/src/main.js',
        test: './web/src/test.js'
    },
    output: {
        path: path.resolve(__dirname, '../webPackage'),
        filename: './js/[name].[hash].js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../webPackage"),
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
            filename: 'main.html',
            template: "./main.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'test.html',
            template: './test.html',
            chunks: ['test']
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, 'webPackage')
        })
    ]
}