/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: ["placeholder"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "powder-blue": "rgba(176, 224, 230, 0.8)",
        "light-sky-blue": "rgba(135, 206, 250, 0.7)",
        "pale-turquoise": "rgba(175, 238, 238, 1)",
        "alice-blue": "rgba(240, 248, 255, 1)",
        Turquoise: " #40E0D0",
        "Sky-blue": "#ADD8E6",
        "Pale-turquoise": "rgba(175, 238, 238, 0.7)",
        "Light-sea-green": "#21A5B7",
        "Cyan-cornflower-blue": "rgba(17, 132, 194, 0.7)",
        Teal: "rgba(0, 128, 128, 0.8)",
        "login-button": "rgba(153, 255, 204, 0.9)",
      },
    },
  },
  plugins: [],
};
