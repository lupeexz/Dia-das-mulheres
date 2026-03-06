/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C1D95',      // roxo profundo
        secondary: '#6D28D9',    // roxo médio
        accent: '#0F172A',       // azul escuro
        background: '#F1F5F9',   // cinza claro elegante
      }
    },
  },
  plugins: [],
}