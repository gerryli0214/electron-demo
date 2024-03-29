const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 单独抽取CSS代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 多进程打包
const HappyPack = require('happypack')
// 多进程压缩代码
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// 资源拷贝插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 自定义webpack插件
const BasePlugin = require('./my-plugins/test-plugin/index')

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
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader' , 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: path.resolve('build/my-loaders/test-loader/test-loader.js')
                    // },
                    {
                        loader: path.resolve('build/my-loaders/drop-console/drop-console.js')
                    },
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }, {
                        loader: 'happypack/loader?id=babel'
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
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            ignoreOrder: true
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader?cacheDirectory']
        }),
        new ParallelUglifyPlugin({
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new CopyWebpackPlugin([
            {
                from: './web/src/lib/worker/*',
                to: path.join(__dirname, "../webPackage/js/[name].[ext]"),
                context: path.join(__dirname, '../'),
            },
            {
                from: './static/*',
                to: path.join(__dirname, "../webPackage")
            }
        ]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../vendor-manifest.json')
        }),
        new BasePlugin()
    ],
    target: 'electron-renderer'
}