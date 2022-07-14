/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  daisyui: {
    themes: [
      {
        main_theme: {
          primary: "#283593",
          secondary: "#3949ab",
          accent: "#c1c8df",
          neutral: "#1a237e",
          "base-100": "#e8eaf6",
          ghost: "#ffffff",
          info: "#9DCEE2",
          success: "#00e676",
          warning: "#ffc107",
          error: "#e53935",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
