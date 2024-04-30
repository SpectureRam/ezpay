//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1B',
        secondary: '#333F44',
        s2 : '#37AA9C',
        s3 : '#94F3E4',
        s4 : '#D1E8E2',
        s5:'#c61a09',
        sec:'#019d91',
        error:'#DC3545',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}