/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        login:
          "url('./src/assets/Premium Vector _ Soft blue gradients color background.jpg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
