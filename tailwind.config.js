/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#fafafa",
          100: "#ededef",
          200: "#d4d4d8",
          300: "#a1a1aa",
          400: "#8b8b94",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#232328",
          900: "#141417",
          950: "#09090b",
        },
        accent: {
          DEFAULT: "#a3e635",
          300: "#bef264",
          600: "#65a30d",
        },
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
