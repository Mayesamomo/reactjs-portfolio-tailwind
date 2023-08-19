/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        background: '#dddfc8', // Background color for content areas
        text: '#123065', // Text color for content
        borders: '#5d6969',// Border color for elements
        primary: '#b74c3c',//accent color for buttons
      },
    },
  },
  plugins: [],
}

