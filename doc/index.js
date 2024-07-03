/**
 * 构建工具
 *  * ESM(es6 modules): 2016年发布,它采用import和export语法来导入和导出模块，与现代浏览器和 Node.js 兼容。
 *  * 构建工具的左右：
 *    * 通过构建工具，我们可以将ESM规范编写的代码转为旧的js语法，这样就可以使得所有浏览器都可以使用了
 *    * 通过构建工具，我们可以将多个js文件合并为一个js文件，减少请求次数，提高页面加载速度
 *  
 *  * 使用步骤
 *    * 初始化项目：yarn init -y 或 npm init -y
 *    * 安装依赖（webpack和webpack-cli(命令行工具)）：yarn add webpack webpack-cli -D 或 npm install webpack webpack-cli -D
 *    * 创建src目录和index.js文件
 *    * 执行 yarn webpack 或 npm webpack 对项目进行打包
 * 
 * 
 * 
 * 
 * 
 * **/