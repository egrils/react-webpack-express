var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

let configs = {
    entry: {
        vendor: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', "./node_modules/bootstrap/dist/css/bootstrap.css"], // 额外插件打包成vender
        index: './public/src/js/index.js',
        login_register: './public/src/js/login_register.js'
    },
    output: {
        path: require('path').resolve("./public/dist"),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {  // es6配置
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, // 排除node_modules内的文件
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}

        ]
    },
    devtool: "#cheap-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
    ]
}


module.exports = configs;
