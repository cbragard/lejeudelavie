import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

const {
    NODE_ENV = 'production',
    NODE_HOST = ''
} = process.env

const __dirname = path.dirname('./')

const config = {
    devtool: 'source-map',
    entry:  {
        client: [
            './src/main.js'
        ]
    },    
    mode: NODE_ENV,
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        filename: NODE_ENV === 'development'
            ? '[name].js'
            : '[name].[hash].js',
        chunkFilename: NODE_ENV === 'development'
            ? '[name].js'
            : '[name].[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.NODE_HOST': JSON.stringify(NODE_HOST)
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'root': path.resolve(__dirname),
        }
    },
    target: 'web'
}
if (NODE_ENV === 'development') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.plugins.push(new HtmlWebpackPlugin({
        inject: false,
        templateContent: ({htmlWebpackPlugin}) => `
          <html>
            <head>
              ${htmlWebpackPlugin.tags.headTags}
            </head>
            <body>
              <div id="app"></div>
              ${htmlWebpackPlugin.tags.bodyTags}
            </body>
          </html>
        `
      }))
    config.devServer = {
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        host: '0.0.0.0',
        port: 3000
    }
}
export default config

