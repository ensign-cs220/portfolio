module.exports = {
    printWidth: 150,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    semi: true,
    arrowParens: 'avoid',
    plugins: [require('prettier-plugin-organize-imports'), require('prettier-plugin-tailwindcss')],
    pluginSearchDirs: false,
};
