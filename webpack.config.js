var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'web/js');
var APP_DIR = path.resolve(__dirname, 'source/js');

module.exports = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
//            {
//                loader: 'postcss-loader',
//                options: {
//                    plugins: [
//                        autoprefixer({
//                            browsers:['ie >= 8', 'last 4 version']
//                        })
//                    ],
//                    sourceMap: true
//                }
//            },
        ],
        rules: [
            {
                test: /\.modernizrrc.js$/,
                use: [ 'modernizr-loader' ]
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: [ 'modernizr-loader', 'json-loader' ]
            }
        ]

    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, ".modernizrrc")
        }
    }
};