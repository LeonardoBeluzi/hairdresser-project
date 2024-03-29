const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  daisyui: {
    themes: [
      {
        main_theme: {
          primary: "#283593",
          secondary: "#3949ab",
          tertiary: "blue-gray-600",
          accent: "#c1c8df",
          neutral: "#CFD8DC",
          "base-100": "#e8eaf6",
          ghost: "#ffffff",
          info: "#3B63C0",
          success: "#00e676",
          warning: "#ffc107",
          error: "#e53935",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
