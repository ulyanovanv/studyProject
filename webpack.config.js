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
            }
        ]
//        rules: [
//            {
//                test: /\.css$/,
//                use: ["style-loader", "css-loader", "postcss-loader"]
//            }
//        ]
    }
};