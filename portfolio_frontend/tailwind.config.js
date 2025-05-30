/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover:'#fff',
        darkHover:'#2a004a',
        darkTheme: 'black',

      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      boxShadow:{
        'black':'0px 2px 4px 1px black',
        'white':'0px 1px 15px 1px #fff',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px,1fr))'
      }

    },
  },
  darkMode:'selector',
  plugins: [],
};
