module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ⬅️ Use this instead of require('tailwindcss')
    require('autoprefixer'),
  ],
}
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
