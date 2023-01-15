/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,css,js}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Cormorant', 'serif'],
                mono: ['Fira Code', 'mono'],
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
