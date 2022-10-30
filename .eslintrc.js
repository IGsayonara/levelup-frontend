module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:vue/base', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // not needed for vue 3
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
