/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  globals: {
    uni: 'readonly',
    wx: 'readonly'
  },
  extends: ['plugin:vue/essential', '@vue/eslint-config-standard', '@vue/eslint-config-prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': ['warn', 'never', { json: 'always', vue: 'always' }],
    camelcase: ['off']
  }
}
