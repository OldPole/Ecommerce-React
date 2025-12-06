import { buildDevServer } from './buildDevServer.js';
import { buildLoaders } from './buildLoaders.js';
import { buildPlugins } from './buildPlugins.js';
import { buildResolves } from './buildResolves.js';

export const buildWebpack = options => {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: options.mode,
    entry: {
      main: paths.entry,
    },
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
