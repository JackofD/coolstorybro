module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {default: '#1b263b'},
        light: {default: '#F7F9F8'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
