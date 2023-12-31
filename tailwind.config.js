/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        very_Dark_Blue: "hsl(235, 21%, 11%)",
        Very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
        Light_Grayish_Blue: "hsl(234, 39%, 85%)",
        Light_Grayish_Blu_hover: "hsl(236, 33%, 92%)",
        Dark_Grayish_Blue: "hsl(234, 11%, 52%)",
        Very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
        Very_Dark_Grayish_Blue: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
