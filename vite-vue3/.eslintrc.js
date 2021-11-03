module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'vue', 'vue-scoped-css', 'import'],
  extends: ['prettier', 'eslint:recommended', 'plugin:vue-scoped-css/vue3-recommended', 'plugin:vue/vue3-strongly-recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js', 'vite.config.ts'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
