module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      common: '#3490dc'
    },
    // 這邊 theme 的回傳值等於前面 colors 的值
    backgroundColor: theme => theme('colors')
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
