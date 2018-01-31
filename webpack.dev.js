const merge = require('webpack-merge');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
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

console.log(`./dist/${THEME_NAME}/assets`);
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
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
    ],
});