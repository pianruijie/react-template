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
    // externals: ['lodash', {react: 'React'}],
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
        // 配置为only的时候，构建失败是不刷新页面作为回退
        hot: true,
        // 看文档这玩意好像也是用来热更新的，待搞清除和hot的差别是啥 https://webpack.docschina.org/configuration/dev-server/#devserverlivereload
        // liveReload: true,
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
        // 初始构建只有，将继续监听任何已解析文件的更改
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