const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BasicPlugin = require('./my-plugins/test-plugin/index')
// const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

function createJSON () {
    return JSON.stringify({
        version: '1.0.0',
        name: 'demo',
        main: 'index.js'
    })
}

module.exports = {
    entry: {
      index: './.electron/entry.js',
      preload: './.electron/preload.js'
    },
    output: {
        path: path.resolve(__dirname, '../mainPackage'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
      new CleanWebpackPlugin({
        root: path.resolve(__dirname, 'mainPackage')
      }),
      new BasicPlugin({
          test: 111
      })
    //   new GenerateAssetPlugin({
    //     filename: 'package.json',
    //     fn: (compilation, cb) => {
    //         cb(null, createJSON(compilation));
    //     }
    // })
    ],
    node: {
        __dirname: true,
        __filename: true
    },
    // resolve: { // 默认文件名匹配
    //     extensions: ['js', 'json'],
    //     modules: ['node_modules'], // 默认导入第三方依赖包位置
    //     enforceExtension: false // 导入文件时，是否强制写全文件扩展名
    // },
    target: 'electron-main'
}