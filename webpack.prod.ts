import { Configuration } from 'webpack';
import commonConfig from './webpack.common';
import merge from 'webpack-merge';
import SentryWebpackPlugin from '@sentry/webpack-plugin';

const prodConfig: Configuration = merge(commonConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    plugins: [
        new SentryWebpackPlugin(
            {
                setCommits: {
                    repo: "https://github.com/vryonidc/AppMonitoringTest.git",
                    auto: true
                },
                include: '.',
                ignore: ['node_modules', 'webpack.common.js', 'webpack.dev.js', 'webpack.prod.js'],
            }
        )
    ]
});

export default prodConfig;
