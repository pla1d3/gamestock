const path = require('path');
const webpack = require('webpack');

module.exports = env=> {
    const isEnvDevelopment = env === 'development';

    return {
        entry: {
            'polyfills': './src/polyfills.ts',
            'app': './src/main.ts'
        },
        output:{
            path: path.resolve(__dirname, './public'),
            publicPath: '/',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                        },
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isEnvDevelopment && 'style-loader' || MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                    isEnvDevelopment
                                        ? '[local]__[hash:base64:5]'
                                        : '[hash:base64:5]'
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [
                        isEnvDevelopment && 'style-loader' || MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.eot$/, /\.ttf$/, /\.woff$/],
                    loader: 'url-loader',
                    options: {
                        name: 'res/[name].[hash:base64:3].[ext]',
                        limit: 100
                    }
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-url-loader'
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core/,
                path.resolve(__dirname, 'src'),
                {}
            )
        ],
        devServer: {
            publicPath: '/',
            contentBase: path.resolve(__dirname, './'),
            historyApiFallback: true,
            overlay: true,
            compress: true,
            port: 3000
        }
    }
};