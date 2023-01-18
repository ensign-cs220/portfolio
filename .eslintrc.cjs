module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'func-names': 'off',
        'global-require': 'off',
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
