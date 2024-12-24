/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'all-sides': '0 0 10px rgba(0, 0, 0, 0.3)',
        'md-all-sides': '0 0 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
