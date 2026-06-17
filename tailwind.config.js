/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          navy: '#1E3A8A',
          sky: '#3B82F6',
          ink: '#111827'
        }
      }
    }
  },
  plugins: []
};
