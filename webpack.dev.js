const merge = require('webpack-merge');
const path = require('path');
const { compiler, THEME_NAME } = require('./webpack.common.js');

const proxyConfig = {
    "target": {
        "host": "localhost",
        "protocol": 'http:',
        "port": 80
    },
    ignorePath: false,
    changeOrigin: true,
    secure: false
}

module.exports = merge(compiler, {
    context: path.resolve(__dirname, './'),
    devtool: 'eval-source-map',
    devServer: {
        contentBase: `./dist/${THEME_NAME}/assets`,
        proxy: {
            '/': proxyConfig,
            '**': proxyConfig,
        },
    },
    plugins: [],
});