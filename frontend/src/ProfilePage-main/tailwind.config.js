/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: 
    {
      colors:{
        Darkblue:"#17212E",
        Yellow:"#F5CF6B",
        White:"#FFFFFF",
        lightYellow:{
          200:"f5e4ba"
        }
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        'times': ['Times New Roman', 'Times', 'serif'],
        'Playwrite': ['Play'],
        poppins: ['Poppins', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

