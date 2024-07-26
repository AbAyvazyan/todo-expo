module.exports = {
    env: {
        browser: true,
        es2021: true,
        'react-native/react-native': true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-native/all', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
