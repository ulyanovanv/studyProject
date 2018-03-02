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
        rules: [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                include : APP_DIR,
                use: {
                    loader : 'babel-loader'
                }
            }
        ]

    }
};

