module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'blue-space': "url('/src/blue-space.jpg')",
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
