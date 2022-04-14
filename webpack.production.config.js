const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    module: {
        rules: [
            {       
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        publicPath: 'img'
                    }
                }],
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
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]
        }),
        new HtmlWebpackPlugin({
            title: "Gifs Plus",
            template: 'src/index.hbs',
            description: 'gifs for half the price!',
            favicon: './src/img/favicon.png'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ]
}