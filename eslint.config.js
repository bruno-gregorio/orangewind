import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // Base StandardJS rules via neostandard
  ...neostandard({ noStyle: true }),

  // TypeScript support
  ...tseslint.configs.recommended,

  // Svelte support
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      },
      globals: {
        ...globals.browser
      }
    }
  },

  // Scope to workspace packages
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.svelte-kit/**',
      '**/build/**',
      '**/storybook-static/**',
      'vanilla-framework/**'
    ]
  },

  // Custom rules aligned with StandardJS
  {
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      eqeqeq: ['error', 'always'],
      'no-var': 'error'
    }
  },

  // Prettier compat — must be last
  prettier
]
