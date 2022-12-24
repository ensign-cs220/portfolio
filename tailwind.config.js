/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,css,js}', './scripts/*.{html,css,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
