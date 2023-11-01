module.exports = {
  root: true,
  // https://eslint.org/docs/rules/no-undef#nodejs
  env: {
    node: true,
    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
