console.log("tailwindcss config in playground");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#ff0000",
      },
    },
  },
  plugins: [],
};
