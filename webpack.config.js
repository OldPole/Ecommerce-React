import path from 'path';
import { fileURLToPath } from 'url';

import { buildWebpack } from './config/build/buildWebpack.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.svg'),
    src: path.resolve(__dirname, 'src'),
  };

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;
};
