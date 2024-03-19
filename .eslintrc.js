module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'next/core-web-vitals',
    'plugin:jest/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    camelcase: ['error'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'eol-last': 'off',
    'lines-between-class-members': 'off',
    'no-case-declarations': 'error',
    'no-prototype-builtins': 'off',
    'object-shorthand': ['error', 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-pascal-case': 'off',
    'quote-props': ['error', 'as-needed'],
    'tailwindcss/classnames-order': 'off', // Respect prettier-plugin-tailwindcss order
  },
}
