/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0083c0",
        secondary: "#76be43",
        primaryHov: "#005e8a",
        secondaryHov: "#568832",
      },
    },
  },
  plugins: [],
};
