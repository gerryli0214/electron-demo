const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
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
        libraryTarget: 'commonjs'
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
    target: 'electron-main'
}