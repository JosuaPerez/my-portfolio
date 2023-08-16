import forms from '@tailwindcss/forms';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            primary: "Playfair Display",
            body: "work Sans",
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem",
            },
        },
        extend: {
            colors: {
                "light-primary": "#F6F4EB",
                "light-secondary": "#91C8E4",
                "light-tail-100": "#749BC2",
                "light-tail-500": "#4682A9",

                "dark-primary": "#272829",
                "dark-secondary": "#61677A",
                "dark-navy-100": "#D8D9DA",
                "dark-navy-500": "#FFF6E0",

                accentColor: {
                    DEFAULT: "#ac6b34",
                    hover: "#925a2b"
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red
            }
        }
    },

    plugins: [forms],
};
