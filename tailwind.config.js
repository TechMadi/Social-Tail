/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      fastDarkGreen: "#0d2818",
      fastLightGreen: "#16db65",
      fadedLightGreen: "#aad576",
      fastRed: "#f21b3f",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "auth-screen": "url('assets/laptop.jpg')",
      },
    },
  },

  plugins: [],
};
