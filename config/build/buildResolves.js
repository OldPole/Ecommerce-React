export const buildResolves = options => {
  return {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
};
