import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/**  @type {import('eslint').Linter.FlatConfig[]} */
export default [
  pluginJs.configs.recommended,
  { plugins: { prettier: prettierPlugin } },
  { ignores: ['node_modules', 'dist '] },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
    },
  },
  {
    files: ['**/*.{js}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
