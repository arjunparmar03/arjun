/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: "#F7F5F2",
        warmWhite: "#F7F5F2",
        charcoal: "#0D0D0D",
        purpleAccent: "#7C3AED",
        accentPurple: "#7C3AED",
        cyanAccent: "#7C3AED",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        syne: ["Syne", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'orbit-1': 'orbit1 20s linear infinite',
        'orbit-2': 'orbit2 25s linear infinite',
        'orbit-3': 'orbit3 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
