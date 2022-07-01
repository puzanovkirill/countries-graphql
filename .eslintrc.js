module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
  plugins: ['react', 'import', 'unused-imports', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {
    'max-depth': [
      'warn',
      {
        max: 4,
      },
    ],
    'max-lines-per-function': ['warn', 120],
    'react/jsx-max-depth': [
      'warn',
      {
        max: 6,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-extraneous-dependencies': 2,
    'unused-imports/no-unused-imports': 2,
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 0,
    'react/no-deprecated': 0,
    'react/display-name': 0,
    'react/no-find-dom-node': 0,
  },
};
