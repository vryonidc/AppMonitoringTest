import { Configuration } from 'webpack';
import commonConfig from './webpack.common';
import merge from 'webpack-merge';
import SentryWebpackPlugin from '@sentry/webpack-plugin';
import { version } from "./package.json";

const prodConfig: Configuration = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new SentryWebpackPlugin(
            {
                release: `${version}`,
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
