const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');


const getPlugins = () => {
    return [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new OptimizeCss({}),
        // todo搞清楚作用
        new webpack.optimize.ModuleConcatenationPlugin()
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
