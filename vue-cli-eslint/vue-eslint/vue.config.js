const path = require('path')
// const webpack = require('webpack')
const resolve = dir => path.join(__dirname, dir)
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    devServer: {
        port: 3200
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
        // 修复HMR 热更新失效
        config.resolve.symlinks(true)
    },
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75 //设计稿宽度的1/10
                })]
            }
        }
    }
}