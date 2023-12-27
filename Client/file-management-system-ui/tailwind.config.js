/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      borderRadius: {
        'onboarding': '100%',
      },
      margin: {
        'title': '20%',
      },
      colors: {
        'forgetPassword': '#4C22C5'
      }
    },
  },
  plugins: [],
}

