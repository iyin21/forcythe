/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],

    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#030516",
                },
                secondary: "rgba(7, 22, 38, 1)",
                white: {
                    100: "#ffffff",
                },
                black: {
                    100: "#000000",
                },
                accent: "rgba(96, 166, 231, 1)",
                accent2: "rgba(179, 208, 242, 1)",
                accent3: "rgba(12, 38, 69, 1) ",
                darkGrey: "rgba(174, 169, 177, 1)",
            },
        },
        fontFamily: {
          lexend: ["Lexend", "serif"],
      },
    },
    plugins: [],
}
