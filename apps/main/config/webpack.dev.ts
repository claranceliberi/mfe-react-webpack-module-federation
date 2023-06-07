// const { merge } = require("webpack-merge");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const commonConfig = require("./webpack.common");
// const packageJson = require("../package.json");

import packageJson from '../package.json';
import { container } from 'webpack';

import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { Configuration } from 'webpack';
import path from 'path';

const PORT = 3000;

const { ModuleFederationPlugin } = container;

const devConfig: Configuration = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${PORT}/`,
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  devServer: {
    port: PORT,
    historyApiFallback: true,
    // compress: true,
    // open: true,
    // hot: true,
    // liveReload: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
      '~': path.resolve(__dirname, '..', '..'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        examination: 'examination@http://localhost:3001/remoteEntry.js',
        autoEcole: 'autoEcole@http://localhost:3002/remoteEntry.js',
        cbtTracking: 'cbtTracking@http://localhost:3003/remoteEntry.js',
        licensing: 'licensing@http://localhost:3004/remoteEntry.js',
        queueManagement: 'queueManagement@http://localhost:3005/remoteEntry.js',
        userManagement: 'userManagement@http://localhost:3006/remoteEntry.js',
        watchList: 'watchList@http://localhost:3007/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<typeof devConfig>(commonConfig, devConfig);
