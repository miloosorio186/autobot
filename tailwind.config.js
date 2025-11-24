/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundSize: {
                "200%": "200% 200%",
            },
            animation: {
                iridescent: "iridescent 1s linear infinite",
            },
            keyframes: {
                iridescent: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
        }
    },
    plugins: [],
};