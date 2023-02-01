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
        'no-plusplus': 'off',
        'eol-last': 'error',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'func-names': 'off',
        'global-require': 'off',
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
