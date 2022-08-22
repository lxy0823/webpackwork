

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            //test  正则，匹配的文件
            //module.rules[]配置loader
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    }],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //处理图片
            // 在正则匹配的文件
            {
                // test: /\.(gif|png|svg|ico)$/,
                // type: 'asset/resource',
                // generator: {
                //     filename: 'images/[name]-[hash:6][ext]'
                // }
                // test: /\.(gif|png|svg|ico)$/,
                // type: 'asset/inline'
                test: /\.(gif|png|svg|ico)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 25 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash:10][ext]'
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    devServer: {
        //当server以后，自动打开浏览器（默认浏览器）运行项目
        open: true,
        //默认端口号为8080改为6666
        port: 8888
    },
}
