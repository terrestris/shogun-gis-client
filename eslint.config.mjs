import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import stylisticPlugin from '@stylistic/eslint-plugin'

import tsEslint from 'typescript-eslint';
import eslint from '@eslint/js';
import globals from 'globals';

import eslintTerrestris from '@terrestris/eslint-config-typescript';

export default tsEslint.config({
  extends: [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.stylistic,
    importPlugin.flatConfigs.recommended
  ],
  files: [
    'src/**/*.{js,mjs,cjs,ts,jsx,tsx}'
  ],
  plugins: {
    react: reactPlugin,
    '@stylistic': stylisticPlugin,
    'react-hooks': reactHooksPlugin,
    'react-refresh': reactRefreshPlugin
  },
  languageOptions: {
    globals: globals.browser,
    ecmaVersion: 'latest',
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  rules: {
    ...eslintTerrestris.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    'max-len': [
      'warn',
      {
        'code': 160
      }
    ],

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',

    'no-unused-vars': 'warn',
    'arrow-spacing': 'warn',
    'comma-spacing': 'warn',
    'comma-dangle': 'warn',
    'eol-last': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', {
      max: 1
    }],
    'object-property-newline': 'warn',
    'object-curly-newline': ['warn', {
      consistent: true,
      minProperties: 2
    }],
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    'react/jsx-max-props-per-line': ['warn', {
      maximum: 1
    }],
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-closing-bracket-location': ['warn'],

    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/order': ['warn', {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
        'object'
      ],
      'pathGroups': [{
        pattern: 'react',
        group: 'external',
        position: 'before'
      }, {
        pattern: '@terrestris/**',
        group: 'external',
        position: 'after'
      }],
      'pathGroupsExcludedImportTypes': ['react'],
      'newlines-between': 'always-and-inside-groups',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true
      }
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
});
