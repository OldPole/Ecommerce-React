import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import importPlugin from 'eslint-plugin-import';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'react/prop-types': 0,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react-router',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
        },
      ],
    },
  },
];
