/** @type {import('tailwindcss').Config} */
import tailwindcssPrimeui from "tailwindcss-primeui";
export default {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssPrimeui],
};
