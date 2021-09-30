module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        'none': 'none',
        'blur': 'blur(20px)',
      }
    },
  },
  variants: {
    extend: {},
    display:['responsive','group-hover', 'group-focus']
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}
