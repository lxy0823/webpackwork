// "scripts": {
//         "build": "webpack",
//         "serve": "webpack serve"
//       },
//     我们为什么要去packjson 当中 配置script 脚本？？？
//     因为如果我们没有配置 直接在终端 使用webpack是打包不了代码的会报错的
//     那么除了 去配置脚本以外我们还有什么好的方法呢？？
//     我们还可以使用npx进行打包 和其他操作 

//     1.npx webpack 也可以进行打包操作  启动打包
//     执行过程如下{
//     首先到node_nodules找到webpack命令，执行它
//     看看我们有没有安装webpack 如果有就使用webpack打包
//     如果我们没有安装 它会帮我们安装 并且 下载webpack打包 打完包 再删除webpack
//     }

//     npx webpack serve 启动开发服务器 
//修改webpack默认配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    //mode: 'production'：生产  ， 'development’：开发
    mode: 'production',
    //entry：相对路径
    entry: './src/main.js',
    // output.path ：输出目录，绝对路径
    // output。filename：输出得文件名字
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true
    },
    // plugins[]配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}
