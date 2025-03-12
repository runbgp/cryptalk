import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.amd
      }
    },
    rules: {
      'indent': ['error', 'tab'],
      'linebreak-style': 0,
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'eqeqeq': ['error', 'always'],
      'no-undef': ['warn'],
      'no-console': ['warn']
    },
    ignores: [
      'client/public/js/cryptalk.min.js',
      'node_modules/**'
    ]
  }
]; 