var path = require('path')

var config = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    devServer: {
        inline:true
    }
};

module.exports = config;