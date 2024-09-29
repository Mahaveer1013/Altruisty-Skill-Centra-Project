/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", './public/index.html'],
	theme: {
	  extend: {
		colors:{
			Darkblue:"#17212E",
			Yellow:"#F5CF6B",
			White:"#FFFFFF",
			'bgcolor':'#F5CF6B',
			'dark-blue':'#111E28',
			'light-yellow':'#E6B63C',
			'white':'#FFFFFF',
		},
		fontFamily: {
		  Poppins: ["Poppins", "sans-serif"],
		  Inter: ["Inter", "sans-serif"],
		  'times': ['Times New Roman', 'Times', 'serif'],
		  'Playwrite': ['Play'],
		  poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
		},
		textColor: {
		  subheading: "#49706B",
		  heading: "#063848",
		},
		screens: {
		  vsm: "320px",
		},
		backgroundImage: {
		  bgimage:"url('/public/images/bgintern.jpg')",
		  serviceBanner: "url('/public/ServiceImages/img2.jpg')",
		  parallaxImg: "url('/public/ServiceImages/parallaxImg.jpg')",
		},
		keyframes: {
			fadeInUp: {
				'0%': { opacity: '0', transform: 'translateY(20px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' },
			  },
			
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  zoomIn: {
			'0%': {
			  transform: 'scale(1)',
			},
			'100%': {
			  transform: 'scale(1.1)',
			},
		  },
		},
		animation: {
		  'fade-in': 'fadeIn 0.5s ease-in forwards',
		  zoomIn: 'zoomIn 5s ease-in-out forwards',
		  fadeInUp: 'fadeInUp 0.5s ease-out forwards',
		},
		},
	  },
	
	plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
  };
  