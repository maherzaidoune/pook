module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    "react/destructuring-assignment": ["error"],
    "react/jsx-handler-names": "off",
    "react-native/sort-styles": ["error", "asc"],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2,
    "sort-imports": ["error", { "ignoreDeclarationSort": true, "ignoreCase": true }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "import/no-duplicates": "off",
  },
  ignorePatterns: ['*.spec.js', 'spec.js', 'src/Utils/', 'docs', 'jest', 'e2e'],
};
