'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        'app': './src/app.js'
    },
    output: {
        path: './www/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html?$/,
                loader: 'raw'
            },
            {
                test: /\.json?$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        root: [path.resolve("./src"), path.resolve(__dirname, 'node_modules')],
        extensions: ['', '.js']
    },
    watch: true,
    cache: true
}