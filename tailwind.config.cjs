// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "media", // or 'class'

  // || Overriding styles
  theme: {
    // | Breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    // || Additional styles
    extend: {
      // | Typography
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },

      // | Background Images
      backgroundImage: {
        light: "url('/images/background-light.jpg')",
        dark: "url('/images/background-dark.jpg')",
      },

      // | Color Pallette
      colors: {
        text: {
          light: "hsl(213, 13%, 14%)",
          dark: "hsl(210, 67%, 96%)",
        },
        background: {
          primary: {
            light: "hsl(0, 0%, 100%)",
            dark: "hsl(216, 28%, 7%)",
          },
          secondary: {
            light: "hsl(210, 29%, 97%)",
            dark: "hsl(215, 21%, 11%)",
          },
        },
        primary: {
          light: "#000",
          dark: "#000",
        },
        secondary: {
          light: "#000",
          dark: "#000",
        },
        accent: {
          light: "#000",
          dark: "#000",
        },
        success: {
          light: "#000",
          dark: "#000",
        },
        error: {
          light: "#000",
          dark: "#000",
        },
        danger: {
          light: "#000",
          dark: "#000",
        },
        warning: {
          light: "#000",
          dark: "#000",
        },
        info: {
          light: "#000",
          dark: "#000",
        },
      },
    },
  },

  plugins: [
  ],
};
