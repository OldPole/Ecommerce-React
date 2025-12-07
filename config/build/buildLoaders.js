import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({ mode }) => {
  const isDev = mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  const jsLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
        plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
      },
    },
  };

  return [assetLoader, svgrLoader, cssLoader, jsLoader];
};
