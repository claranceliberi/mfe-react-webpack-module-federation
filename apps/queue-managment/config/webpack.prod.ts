import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import path from 'path';
import packageJson from '../package.json';
import { container } from 'webpack';

// const domain = process.env.PRODUCTION_DOMAIN;

const { ModuleFederationPlugin } = container;
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
  plugins: [
    new ModuleFederationPlugin({
      name: 'queueManagement',
      filename: 'remoteEntry.js',
      exposes: {
        './QueueManagementApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<typeof prodConfig>(commonConfig, prodConfig);
