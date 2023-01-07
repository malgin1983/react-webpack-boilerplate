import path from 'path'
import merge from 'webpack-merge'
import sharedConfig, { Configuration } from './webpack.shared.config'

const devConfig: Configuration = merge(sharedConfig, {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, 'build'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
})

export default devConfig
