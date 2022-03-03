/**
* @file webpack.config.js webpack编译配置
* @author pianruijie(pianruijie@baidu.com)
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：
    1.源码。
    2.源码会依赖的任何第三方的 library 或 "vendor"
    3.webpack的runtime 和 manifest，管理所有模块的交互：webpack 用来连接模块化应用程序所需的所有代码,通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。
 */
// 打包原理：https://webpack.docschina.org/concepts/under-the-hood/#the-main-parts
/*
    模块会被合并成chunk，chunk合并成chunk组，并根据引用关系生成一个图moduleGraph的数据结构
    eg：如果不做任何处理，只有一个起点就会创建只有一个chunk的chunk组，多入口就会创建多个chunk组。一个chunk组中只有一个chunk
    eg：使用splitChunksPlugin会将一个chunk拆分为一个或多个chunk，这样的话chunk组中就会有多个chunk
    可以得出结论：一个bundle对应一个chunk组，一个bundle中能有一个或多个chunk
    chunk有两种形式：
    1. initial：包含入口起点的所有模块以及assets
    2. non-initial：可以延迟加载的模块，出现在动态导入或者splitChunksPlugin时
    文档：https://webpack.docschina.org/plugins/split-chunks-plugin/
*/
module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx|.ts?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: 'less-loader'
            },
            // SVG Font
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/svg+xml'
                    }
                }
            },
            // Common Image Formats
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        // 支持自动补全的文件后缀
        extensions: [".ts", ".tsx", ".js"],
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my react book',
            template: './index.html'
        })
    ]
};