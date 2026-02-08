const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: { path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    sourceType: 'module',
                    presets: [['@babel/preset-env', { modules: false }]],
                },
            }
        }]
    },
    devtool: 'source-map',
}