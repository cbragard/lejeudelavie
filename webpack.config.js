const
    nodeExternals = require('webpack-node-externals'),
    path = require('path'),
    vueLoaderPlugin = require('vue-loader/lib/plugin'),
    webpack = require('webpack')

module.exports = [
    {
        name: 'client',
        target: 'web',
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: 'http://0.0.0.0:3001/',
            filename: '[name].js'
        },
        entry:  {
            client: './src/main.js'
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new vueLoaderPlugin()
        ],
        devServer: {
            contentBase: __dirname + '/build/',
            historyApiFallback: true,
            hot: true,
            host: '0.0.0.0',
            port: 3001,
            watchOptions: { poll: true },
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    }
]
