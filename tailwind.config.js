/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1F2A44",
        accent: "#3B5E8C",
        cream: "#FAFAF8",
        charcoal: "#262626",
        muted: "#6B7280",
        silver: "#C7CCD6",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
