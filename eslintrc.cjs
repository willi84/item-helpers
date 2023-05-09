/* eslint-env node */
module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
    },
    'ignorePatterns': ['node_modules/', 'dist/'],
    'extends': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
      'ecmaVersion': 'latest',
    },
    'plugins': [
      '@typescript-eslint',
    ],
    'rules': {
      '@typescript-eslint/no-empty-interface': 'error',
      // 'camelcase': ['error', {'ignoreGlobals': true}],
  
    },
  };
  