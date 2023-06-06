// const { merge } = require("webpack-merge");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const commonConfig = require("./webpack.common");
// const packageJson = require("../package.json");


import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration } from 'webpack';


const PORT = 3000;

const devConfig : Configuration = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  // @ts-ignore
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: "index.html",
    },
    compress: true,
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
