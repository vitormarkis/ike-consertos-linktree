/** @type {import('tailwindcss').Config} */
const config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tesla: ["Tesla", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

module.exports = config
