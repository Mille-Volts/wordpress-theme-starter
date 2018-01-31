const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const THEME_NAME = process.env['npm_package_name'] ||  'my-theme';
exports.THEME_NAME = THEME_NAME;


exports.compiler = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', THEME_NAME, 'assets'),
        publicPath: '/wp-content/themes/' + THEME_NAME + '/assets/',
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: true || { /* CSSNano Options */ }
                    }
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }, {
            test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true || { /* CSSNano Options */ }
                    }
                },
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/,
            use: [{
                loader: 'url-loader',
                options: { limit: 10000 }
            }],
            exclude: /node_modules/,
        }],
        // loaders: [
        // { test: /\.js$/, loader: 'babel?presets=env', exclude: /node_modules/ },
        // ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { context: path.resolve(__dirname, 'src', 'templates'), from: './**/*', to: '../' }
        ]),
        // new ExtractTextPlugin('bundle.min.css'),
        new WriteFilePlugin(),
    ],
};