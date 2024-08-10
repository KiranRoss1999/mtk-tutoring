/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          body: "Quicksand, sans-serif",
          heading: "Quicksand, sans-serif"
        },
        colors: {
          green: {
            50: "#f2fbf6",
            100: "#dff8eb",
            200: "#c2f0d8",
            300: "#93e2ba",
            400: "#5ccc94",
            500: "#35b274",
            600: "#27925d",
            700: "#22734b",
            800: "#1f5c3e",
            900: "#1c4b35",
            950: "#0a291b"
          },
          sky: {
            50: "#fefeff",
            100: "#e0e0fe",
            200: "#babefd",
            300: "#7d87fc",
            400: "#384af8",
            500: "#0e22e9",
            600: "#020ec7",
            700: "#030aa1",
            800: "#070d85",
            900: "#0c0f6e",
            950: "#080849"
          },
          darksky: {
            50: "#eff9ff",
            100: "#d6efff",
            200: "#b8e8ff",
            300: "#79d5ff",
            400: "#32c1fe",
            500: "#07aaf0",
            600: "#0088ce",
            700: "#006da6",
            800: "#035b89",
            900: "#094c71",
            950: "#06304b"
          },
          orange: {
            50: "#fff9ed",
            100: "#fff1d5",
            200: "#fedfaa",
            300: "#fed18c",
            400: "#fca43b",
            500: "#fa8915",
            600: "#eb6d0b",
            700: "#c3520b",
            800: "#9b4111",
            900: "#7d3711",
            950: "#431a07"
          },
          darkorange: {
            50: "#fff9ed",
            100: "#fff1d5",
            200: "#fed99b",
            300: "#fdc674",
            400: "#fba33c",
            500: "#f98816",
            600: "#ea6c0c",
            700: "#c2510c",
            800: "#9a4012",
            900: "#7c3712",
            950: "#431907"
          },
          red: {
            50: "#fff3f1",
            100: "#ffe4e0",
            200: "#ffccc5",
            300: "#ffa99d",
            400: "#ff7865",
            500: "#fe654f",
            600: "#ec3116",
            700: "#c7250e",
            800: "#a42310",
            900: "#882314",
            950: "#4a0e05"
          },
          transparent: "transparent",
          gray: {
            50: "#f7f7f7",
            100: "#ececec",
            200: "#dfdfdf",
            300: "#c4c4c4",
            400: "#a5a5a5",
            500: "#8b8b8b",
            600: "#727272",
            700: "#5b5b5b",
            800: "#4d4d4d",
            900: "#424242",
            950: "#2b2b2b"
          }
        },
        backgroundColor: {
          body: "#ffffff"
        }
      }
    },
    content: [
      "./src/**/*.{js,jsx,html}"
    ],
    plugins: []
  }
  