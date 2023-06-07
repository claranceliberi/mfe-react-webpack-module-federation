import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
import commonConfig from './webpack.common';
import path from 'path';
// const packageJson = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig: Configuration = {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    // publicPath: '/container/latest/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
      '~': path.resolve(__dirname, '..', '..'),
    },
  },
  //   plugins: [
  //     new ModuleFederationPlugin({
  //       name: 'container',
  //       remotes: {
  //         marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
  //         auth: `auth@${domain}/auth/latest/remoteEntry.js`,
  //       },
  //       shared: packageJson.dependencies,

  //     }),
  //   ],
};

export default merge<typeof prodConfig>(commonConfig, prodConfig);
