import { Configuration } from "webpack";
import { merge } from "webpack-merge";
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
import commonConfig from "./webpack.common";
// const packageJson = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig: Configuration = {
  mode: 'production',
//   output: {
//     filename: '[name].[contenthash].js',
//     publicPath: '/container/latest/',
//   },
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
