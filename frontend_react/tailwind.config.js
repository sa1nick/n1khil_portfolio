/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: 'Manrope',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

