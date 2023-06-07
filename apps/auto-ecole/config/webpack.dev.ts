import packageJson from '../package.json';
import { container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { Configuration } from 'webpack';
import path from 'path';

const PORT = 3002;

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
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
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
      name: 'auto-ecole',
      filename: 'remoteEntry.js',
      exposes: {
        './AutoEcoleApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

export default merge<typeof devConfig>(commonConfig, devConfig);
