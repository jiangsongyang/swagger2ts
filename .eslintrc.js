module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // common
    indent: 'off',
    eqeqeq: 'error',
    'no-eval': 'off',
    'no-unsafe-finally': 'off',
    'no-duplicate-case': 'error',
    'no-irregular-whitespace': 'error',
    'no-new-func': 'error',
    'no-sequences': 'error',
    'no-useless-return': 'error',
    'wrap-iife': 'error',
    'no-debugger': 'off',
    // stylistic
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'new-cap': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'error',
    'multiline-ternary': 'off',
    // es6
    'arrow-spacing': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'rest-spread-spacing': 'error',
    // ts
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
  }
}
