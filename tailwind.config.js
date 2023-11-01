/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '16': '4rem',
      '80%': '80%',
    },
    extend: {colors: {
      'pdf': '#31363a',
    },
  },
  },
  plugins: [],
}

