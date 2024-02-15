module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
    jsx: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // # React

    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-max-props-per-line': 1,
    'react/no-unknown-property': 0,
    'react/jsx-fragments': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-curly-spacing': [
      'warn',
      {
        'when': 'always',
        'children': {
          'when': 'always'
        }
      }
    ],

    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function'
      }
    ],

    // # JSX A11Y

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    // # TypeScript

    '@typescript-eslint/no-unsafe-return': 0, // return any type !
    '@typescript-eslint/no-explicit-any': 0, // any type !
    '@typescript-eslint/no-unsafe-assignment': 0, // any type variable !

    '@typescript-eslint/semi': [
      2,
      'never'
    ],
    '@typescript-eslint/comma-dangle': [
      2,
      'never'
    ],

    // # Imports

    'import/prefer-default-export': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          ['^.+\\.?(unfonts.css)$'],
          ['^.+\\.?(main.scss)$'],
          ['^react'],
          ['^@?\\w'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^(@themes)(/.*|$)'],
          ['^(@models)(/.*|$)'],
          ['^(@constants)(/.*|$)'],
          ['^(@utils)(/.*|$)'],
          ['^(@hooks)(/.*|$)'],
          ['^(@components)(/.*|$)'],
          ['^(@services)(/.*|$)'],
          ['^(@store)(/.*|$)'],
          ['^(@stories)(/.*|$)'],
          ['^(@interfaces)(/.*|$)'],
          ['^.+\\.?(.scss)$']
        ]
      }
    ],

    // # Other

    'no-underscore-dangle': 0,
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'max-len': [
      2,
      1050
    ],
    'indent': ['error', 2]
  },
}
