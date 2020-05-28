import * as path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin';

const commonConfig: Configuration = {
    entry: {
        'app-html': './app-html/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './app-html/index.html'
        }),
        new CspHtmlWebpackPlugin({ 'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"] })
    ]
};

export default commonConfig;
