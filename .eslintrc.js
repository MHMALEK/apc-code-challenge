export default {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb-base-typescript-prettier',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-param-reassign': [2, { props: false }],
  },
};
