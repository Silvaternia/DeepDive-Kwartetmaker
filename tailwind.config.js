/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./html/*.html",
        "./js/*/*.js",
        "./*.html"
    ],
    theme: {
        extend: {
            colors: {
                white: "#f8f8ff",
            },
        },
    },
    plugins: [],
}

