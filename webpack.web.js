const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    output:{
        path: path.join(__dirname, './build'),
        publicPath:'/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.resolve(__dirname, 'tsconfig.json')
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: { loader: 'html-loader' }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'),
            {}
        ),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: { collapseWhitespace: true }
        })
    ],
    devServer: {
        publicPath: '/',
        contentBase: './public',
        historyApiFallback: true,
        overlay: true,
        compress: true,
        port: 3000
    },
}