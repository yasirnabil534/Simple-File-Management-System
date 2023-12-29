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
        'inter': ['Inter'],
      },
      borderRadius: {
        'onboarding': '100%',
      },
      colors: {
        'forgetPassword': '#4C22C5',
        'navbar': '#1C2434',
      },
      content: {
        'toggle-false': 'url("./src/assets/sun.svg")',
      },
    },
  },
  plugins: [],
}

