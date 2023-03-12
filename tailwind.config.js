/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "dynamic-md": "clamp(1.25rem, 4vw, 2rem)",
        "dynamic-lg": "clamp(2rem, 6vw, 3rem)",
        "dynamic-xlg": "clamp(3rem, 8vw, 4rem)",
        "dynamic-sm": "clamp(1rem, 3vw, 1.5rem)",
      },
    },
  },
  plugins: [],
};
