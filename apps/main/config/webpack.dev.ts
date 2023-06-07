// const { merge } = require("webpack-merge");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const commonConfig = require("./webpack.common");
// const packageJson = require("../package.json");

import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { Configuration } from 'webpack';
import path from 'path';

const PORT = 3000;

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
    // new ModuleFederationPlugin({
    //   name: 'container',
    //   remotes: {
    //     marketing: 'marketing@http://localhost:8081/remoteEntry.js',
    //     auth: 'auth@http://localhost:8082/remoteEntry.js',
    //   },
    //   shared: packageJson.dependencies,
    // }),
  ],
};

export default merge<typeof devConfig>(commonConfig, devConfig);
