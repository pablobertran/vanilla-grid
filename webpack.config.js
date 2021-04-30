const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        library: "VanillaGrid",
        libraryTarget: "var"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    entry: {
        main: ['./src/library.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'sample/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-class-properties',
                            '@babel/plugin-proposal-private-methods'
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};
