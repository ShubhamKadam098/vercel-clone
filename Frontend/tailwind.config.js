/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "#000",
        "secondary-color": "#0a0a0a",
        "card-color": "#0a0a0a",
        "primary-font-color": "#ededed",
        "secondary-font-color": "#a1a1a1",
        "accent-color": "#0070f3",
        "border-color": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
