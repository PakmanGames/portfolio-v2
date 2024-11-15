const { transform } = require('next/dist/build/swc');

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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        bounce: {
          '0%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          },
          '75%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
