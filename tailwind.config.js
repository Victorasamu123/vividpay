/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'apple':['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
      },
      colors:{
          papayawhip:{
            light:"#fef4e4",
            DEFAULT:"#ffefd5",
            dark:"#fee5bc"
          }
      },
      screens:{
        'widescreen': {'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen': {'raw':'(max-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
        'element':{
          '0%': { transform: "translateY(1.5rem)"},
          // '50%': { transform: 'scaleY(0.5)'},
          '100%': { transform: "translateY(-1.5rem)"},
        },

      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'element': 'element 2s ease-in-out forwards infinite',

      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'apple':['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
      },
      colors:{
          papayawhip:{
            light:"#fef4e4",
            DEFAULT:"#ffefd5",
            dark:"#fee5bc"
          }
      },
      screens:{
        'widescreen': {'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen': {'raw':'(max-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
        'element':{
          '0%': { transform: "translateY(1.5rem)"},
          // '50%': { transform: 'scaleY(0.5)'},
          '100%': { transform: "translateY(-1.5rem)"},
        },

      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'element': 'element 2s ease-in-out forwards infinite',

      }
    },
  },
  plugins: [],
}
