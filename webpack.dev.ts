import { Configuration } from 'webpack';
import commonConfig from './webpack.common';
import merge from 'webpack-merge';

const devConfig: Configuration = merge(commonConfig, {
    mode: 'development'
});

export default devConfig;
