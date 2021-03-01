module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark2: {default: '#1a1a2e', dim: '#16213e', light: '#0f3460'},
        dark: {default: '#1b263b', 'dim': '#424b63'},
        light: {default: '#F7F9F8'},
        primary: {default: '#2a9d8f'},
      },
      borderColor: theme => ({
        ...theme('colors')
      }),
      maxWidth: {
        '8xl': '100rem'
      }
    },
  },
  variants: {
    extend: {
      scale: ['active']
    },
  },
  plugins: [],
}
