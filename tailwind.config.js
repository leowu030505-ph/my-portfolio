/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0052FF",
        "primary-light": "#E8F0FF",
        "text-primary-light": "#111827",
        "text-primary-dark": "#f9fafb",
        "text-secondary-light": "#4b5563",
        "text-secondary-dark": "#d1d5db",
        "bg-card-light": "#ffffff",
        "bg-card-dark": "#1f2937",
        "bg-dark": "#121212",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
