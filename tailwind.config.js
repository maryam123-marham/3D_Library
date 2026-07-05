/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        walnut: {
          950: '#1c120c',
          900: '#241710',
          800: '#3a2418',
          700: '#4d3020',
          600: '#5d3a26',
        },
        brass: {
          400: '#e0c179',
          500: '#c9a24b',
          600: '#a9813a',
        },
        parchment: '#f2e9d8',
        ink: '#241710',
        moss: '#2f4f3f',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
