/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {},
    fontFamily: {
      header: ["Bungee Spice", "cursive"],
      title: ["Passion One", "cursive"],
    },
    boxShadow: {
      cardHover: "0 0 20px 10px #3f1a00",
      cardDel: "inset 0 0 10px 7px #9f1239",
    },

    width: { headerWidth: "calc(90% - 16px)" },
    minHeight: { listHeight: "calc(100vh + 50px)" },
    screens: {
      400: "400px",
    },
    keyframes: {
      appear: {
        "0%": {
          opacity: 0,
          transform: "scale(0.95)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1)",
        },
      },
      fadeIn: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
    animation: {
      appear: "appear .2s ease",
      fadeIn: "fadeIn .2s ease",
    },
  },
};
export const plugins = [];
