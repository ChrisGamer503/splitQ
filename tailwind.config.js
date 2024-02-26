/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        DEFAULT: "var(--rounded)" 
      },
      backgroundImage:{
        "gradient-principal": "linear-gradient(var(--gradient-principal))",
        "aqua-gradient": "linear-gradient(var(--aqua-gradient))",
        "blue-gradient": "linear-gradient(var(--blue-gradient))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        "action-bg-button": "var(--action-bg-button)",
        "action-text-button": "var(--action-text-button)",
        "text-secundary": "var(--text-secundary)",
        "yellow-bg-notification": "var(--yellow-bg-notification)",
        "yellow-border-notification": "var(--yellow-border-notification)",
        "yellow-text-notification": "var(--yellow-text-notification)",
        "light-blue": "var(--light-blue)",

      }
    },
  },
  plugins: [],
}
