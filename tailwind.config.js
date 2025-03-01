/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A1D21",
        green: "#4CFDC7",
        gray: "#6B7280",
        card: "#0B0B0F",
        search: "#1B1E22",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "back-image": "url('/images/back.png')",
      },
    },
  },
  plugins: [],
};
