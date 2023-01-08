/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",             // apply to pages folder / any subfolder name / any filename with listed ext types.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColour: {
          100: '#03cffc'
        }
      }
    },

  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
