// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto Mono'", ...fontFamily.sans],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
        // 'spin-slow': 'spin 6s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
