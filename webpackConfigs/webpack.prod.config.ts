import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import path from 'path'
import merge from 'webpack-merge'
import sharedConfig, { Configuration } from './webpack.shared.config'

const devConfig: Configuration = merge(sharedConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new CleanWebpackPlugin(),
    ],
})

export default devConfig
