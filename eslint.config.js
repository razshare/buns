import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-const-assign': 'warn',
      'no-this-before-super': 'warn',
      'no-undef': 'warn',
      'no-unreachable': 'warn',
      'no-unused-vars': 'warn',
      'constructor-super': 'warn',
      'valid-typeof': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'func-names': ['error', 'always'],
      // @see https://astexplorer.net/
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ArrowFunctionExpression',
          message: 'Shorthand arrow functions are not allowed.',
        },
        {
          selector: 'ClassDeclaration',
          message: 'Classes are not allowed, use object literals instead.',
        },
      ],
    },
  },
]