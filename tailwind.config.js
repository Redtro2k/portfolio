/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{vue,js}", "*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'belanosima' : ['Belanosima', 'sans-serif'],
        'figree' : ['Figtree', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
//npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch
