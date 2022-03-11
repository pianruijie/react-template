const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    // 是否生成map.js,注意从webpack5开始顺序要求严格了
    devtool: 'eval-cheap-module-source-map',
    entry: {
        book: path.join(__dirname, '../src/index.tsx')
    },
    output: {
        // 这里的name是占位符，值为entry中指定的入口名称
        filename: '[name].js',
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'umd'
    },
    plugins: [
        // 热更新插件 + devServer中配置hot: true 开启热更新 同时dev-server v4开始，hmr是默认启用的，自动配置该插件，只要设置hot即可
        // new webpack.HotModuleReplacementPlugin({
            // 设置为true，插件回分成两步构建文件，首先编译加载chunks，之后再编译剩余的通常的资源
        //     multiStep: true
        // })
    ],
    // 控制bundle信息如何显示:https://webpack.docschina.org/configuration/stats/
    stats: 'errors-only',
    devServer: {
        // 改为auto可以自动申请可用端口，port不能随便起，部分端口会提示unsafe port导致服务启动失败
        port: '8890',
        host: '127.0.0.1',
        compress: true, 
        hot: true, //工作原理：https://webpack.docschina.org/concepts/hot-module-replacement/#how-it-works
        // headers, 可以为所有响应添加header https://webpack.docschina.org/configuration/dev-server/#devserverheaders
        // open: {
            // target: ['/'],
            // app: {
            //     name: 'google-chrome',
            //     arguments: ['--new-window'],
            // }
        // },
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        static: {
            directory: path.join(__dirname, 'assets'),
            publicPath: '/static',
            watch: true
        },
        // 将继续监听任何已解析文件的更改
        // 文件变化时dev-server会重载页面，热更新只是模块替换 https://webpack.docschina.org/configuration/dev-server/#devserverlivereload
        // liveReload: true,
        watchFiles: {
            paths: ['src/**/*', 'assets/*'],
            options: {
                polling: 100
            }
        },
        // 为h5不支持的历史api配置fallback
        historyApiFallback: true
    }
})