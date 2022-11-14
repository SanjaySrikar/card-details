/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled : true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily:{
        space : ['Space Grotesk', 'sans-serif']
      },
      fontWeight:{
        '500' : 500
      },
      fontSize: {
        default : ['18px']
      }
    },
    colors: {
      'dark-violet' : '#210830',
      'violet' : '#3d2149',
      'lg-1' : '#6448fe',
      'lg-2' : '#600594',
      'red' : '	#ff5252',
      'white' : '#ffffff',
      'light-gray-violet': '#dedddf',
      'dark-gray-violet': '#8e8593',
      'very-dark-violet': '	#21092f',
      'black' : '#000000',
      'red' : '#8B0000'
    }
  },
  plugins: [
  ],
}
