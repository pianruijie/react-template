const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCss = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');


const getPlugins = () => {
    return [
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        // new OptimizeCss({}),
        new webpack.optimize.ModuleConcatenationPlugin()
        // 之前wbepack打包会将bundle中各模块单独达成闭包，会导致运行速度变慢，这个插件提供一个预编译功能，会将所有模块一起编译到一个模块中，称为作用域提升，提升运行速率
    ].filter(Boolean);
};

module.exports = merge(baseConfig, {
    mode: 'production',
    bail: true,
    devtool: 'source-map',
    entry: {
        book: path.join(__dirname, '../src/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'umd'
    },
    plugins: getPlugins()
});
