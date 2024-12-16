/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif', 'Radley', 'serif'],
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E3A8A",
          "primaryDark": "#8B0000",
          "white": "#ffffff",
          "golden": "#846316",
          "gray": "#F7F7F7",
          "grayDark": "#8E8E8E",
          "star": "#FFD33C",
          "black": "#000000",
          "base-100": "#ffffff", // Light theme background
          "base-content": "#000000", // Light theme text
        },
      },
      {
        mydarktheme: {
          "primary": "#1E3A8A",
          "primaryDark": "#8B0000",
          "white": "#ffffff",
          "golden": "#846316",
          "gray": "#F7F7F7",
          "grayDark": "#8E8E8E",
          "star": "#FFD33C",
          "black": "#000000",
          "base-100": "#000000", // Dark theme background
          "base-content": "#ffffff", // Dark theme text
        },
      }
    ],
    darkTheme: "mydarktheme", // Default dark theme
  },
}
