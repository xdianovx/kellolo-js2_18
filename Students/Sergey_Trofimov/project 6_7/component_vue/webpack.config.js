const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // entry: {
    //     main: './src/app.js'
    // },
    output: {
        filename: 'script/bundle.js'
    },
    //...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                exclude: /node_modules/
            }
        ],
    },
    devServer: {
      port: 3000,
      open: false,
    }
  };