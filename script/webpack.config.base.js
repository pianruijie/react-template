/*
 * @Author: your name
 * @Date: 2022-01-07 15:53:37
 * @LastEditTime: 2022-02-16 20:50:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /baidu/personal-code/react-demo/script/webpack.config.base.js
 */
/**
* @file webpack.config.js webpack编译配置
* @author pianruijie(pianruijie@baidu.com)
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const EsLintPlugin = require('eslint-webpack-plugin');

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
        }),
        // new EsLintPlugin({
        //     eslintPath: 'eslint',
        //     exclude: ['node_modules']
        // })
    ]
};