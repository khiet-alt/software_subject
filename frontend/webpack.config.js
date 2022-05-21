const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname),
    entry: [
        path.join(__dirname, "src", "index.js"),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.bundle.js',
        clean: true,
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.(css|scss)$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'src', 'pages')
                ],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],

            }, {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output management',
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        port: 8000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        },
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
}