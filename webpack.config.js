const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                // 加载css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 加载less
                test: /[.]less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 加载sass
                test: /[.]scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // 加载图片
                test: /\.(jpg|png|gif)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            name: '[name].[ext]'
                        }
                    },
                    //图片压缩,
                    {
                        loader: 'image-webpack-loader'
                    }
                ]

            },
            {
                // 加载字体图标
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                // 解析js ES6以上高级语法
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // 加载vue文件
                test: /\.vue$/,
                use: 'vue-loader'
            }

        ]
    },
    plugins: [
        // html插件
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            title: 'lk-webpack-demo',
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 'vue$': 'vue/dist/vue.js'
        }
    }
}