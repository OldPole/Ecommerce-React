import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/types';

export const buildResolves = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
};
