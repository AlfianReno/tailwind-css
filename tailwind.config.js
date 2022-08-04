/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js,css}',
    './src/**/*.{html,js,css}'
  ],
  theme: {
    extend: {
      colors:{
        "ungu": "#5267DF",
        "merah": "#FA5959",
        "biru": "#242A45",
        "abu-abu": "#9194A2",
        "putih": "#f7f7f7",
        "biru-tua": "#0f172a",
        "biru-agak-tua": "#94a3b8",
        "putih-agak-biru": "#cbd5e1",
        "biru-button": "#111827",
        "midnight": "#121063",
        "gray": "#5D6D7E"

      },

      fontFamily:{
        Poppins:["Poppins, sans-serif"]
      },
      container:{
        center:true,
        padding:"1rem",
        screens:{
          lg:"1124px",
          xl:"1124px",
          "2xl":"1124px"
        },
      },

      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}
