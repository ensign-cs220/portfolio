/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,css,js}'],
    theme: {
        screens: {
            mobile: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                serif: ['Cormorant', 'serif'],
                mono: ['Fira Code', 'mono'],
                cursive: ['Itim', 'cursive'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
