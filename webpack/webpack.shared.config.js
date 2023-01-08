const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const sharedConfig = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.xlsx|\.xls($|\?)/,
        generator: {
          filename: 'files/[name][ext][query]',
        },
        type: 'asset/resource',
      },
      {
        test: /\.ico|\.png|\.gif|\.svg|\.jpg($|\?)/,
        exclude: [/fonts/],
        generator: {
          filename: 'images/[name][ext][query]',
        },
        type: 'asset/resource',
      },
      {
        test: /\.eot|\.ttf|\.woff|\.woff2|\.svg($|\?)/,
        include: [path.resolve(__dirname, 'src/assets/fonts')],
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/,
        generator: {
          filename: 'video/[name][ext][query]',
        },
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CopyPlugin({
      patterns: [
        {
          context: 'public',
          from: '*.{ico,png,json,txt}',
        },
      ],
    }),
  ],
};

module.exports = sharedConfig;
