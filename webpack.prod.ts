import { Configuration } from 'webpack';
import commonConfig from './webpack.common';
import merge from 'webpack-merge';

const prodConfig: Configuration = merge(commonConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
});

export default prodConfig;
