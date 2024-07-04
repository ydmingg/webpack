const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // 设置打包模式：开发模式 development, 生产模式 production
    // entry: './src/index.js', // 入口文件(一般不改其他文件夹，选择src就好),一般不需要配置
    // entry: [
    //     './doc/index.js',
    //     './src/index.js'
    // ]
    // entry: {
    //     doc: './doc/index.js',
    //     src: './src/index.js'
    // }
    output: { 
        path: path.resolve(__dirname, "dist") , // 配置打包后文件存放目录(必须是绝对路径)
        // filename: 'bundle.js', // 配置打包后文件名
        // filename: '[name].js', 
        filename: '[name].js',
        clean: true // 清除打包目录
    },
    // webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型的文件，则需要引入loader
    // 已css为例：
    // 步骤 ：1.安装 yarn add css-loader -D 
    //       2.配置
    module: {
        rules: [
            { // css
                test: /\.css$/i,
                use: ["style-loader","css-loader"]// style-loader使用，css-loader：转换
            },
            { // 图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            // 希望新语法兼容旧的浏览器，需要使用babel
            // 安装 yarn add -D babel-loader @babel/core @babel/preset-env
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            }
        ]
    },
    // 插件：在打包时生成index.html文件
    plugins: [new HTMLPlugin({
        // title: "HTML",
        template: "./src/index.html"
    })],
    // 对源码进行映射，方便修改
    devtool:"inline-source-map",



}