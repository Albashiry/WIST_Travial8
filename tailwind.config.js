/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      xs: ['12px','16px'],
      sm: ['14px','20px'],
      base: ['16px','19.5px'],
      lg: ['18px','21.94px'],
      xl: ['20px','24.38px'],
      '2xl': ['24px','29.26px'],
      '3xl': ['28px','50px'],
      '4xl': ['48px','58px'],
      '8xl': ['96px','106px'],
    },
    extend: {
      colors: {
        "primary": "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F5F5",
        "white-400": "rgba(255,255,255,0.8)",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow:{
        '3xl': '0 10px 40px rgba(0,0,0,0.1)',
      },
      backgroundImage:{
        'hero': "url('assets/images/hero.svg')",
        'card': "url('assets/images/card.svg')",
      },
      screens: {
        "wide": "1920px",
      },
    }
  },
  plugins: [],
}