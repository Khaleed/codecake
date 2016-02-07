var webpack = require('webpack');
var path = require('path');
module.exports = {
    // console errors map to correct file and line number
    devtool: 'eval-source-map',
    // app entry point
    entry: [
        // runs babel helper code 
         'babel-polyfill',
        // current app
        './src/index.js',
        // hot style updates
        'webpack/hot/dev-server',
        // refresh browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080'
    ],

    devServer: {
        contentBase: "public/"
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // define module loaders
    module: {
        loaders: [
             {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                // options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0'],
                }
            }
        ]
    },
    // resolution
    resolve: {
        extensions: ['.js', '.json', '']
    },

    plugins: [
        // ommit compiling plugin errors
        new webpack.NoErrorsPlugin(),
        // Hot module replacement
        new webpack.HotModuleReplacementPlugin()
    ]
};