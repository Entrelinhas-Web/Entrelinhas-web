/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        preto: "#1A1423",
        branco: "#EDEDE9",
        rosa: "#CD4D5E",
        vermelho: "#E03131",
        laranja: "#D9A152",
        amarelo: "#FFDF9A",
        verde: "#4E6E58",
        azul: "#1971C2",
        lilas: "#7F75B4",
      },
      fontFamily: {
        press: ['"Press Start 2P"', "monospace"],
      },
    },
  },
  plugins: [],
};
