// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'turbo',
    'plugin:vitest/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
