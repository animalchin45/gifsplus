const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        historyApiFallback: true,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {       
                test: /\.(png|jpg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        publicPath: 'img'
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {  
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]
        }),
        new HtmlWebpackPlugin({
            title: "Gifs Plus",
            template: 'src/index.hbs',
            description: 'gifs for half the price!',
            favicon: './src/img/favicon.ico'
        }),
        new Dotenv()
    ]
}