import globals from 'globals'

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      // sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      indent: [1, 2],
    },
  },
]
