import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../assets/css/style.css',
        }),
    ],
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                    sourceType: 'module',
                },
            },
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }],
    },
    devtool: 'source-map',
};