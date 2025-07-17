/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#88dce5',
          50: '#f0fcfd',
          100: '#e0f9fb',
          200: '#baf2f6',
          300: '#88dce5', // Main primary color
          400: '#59d0df',
          500: '#33b8c9',
          600: '#2595a9',
          700: '#217889',
          800: '#206272',
          900: '#1f5260',
          950: '#11333d',
        },
        accent: {
          DEFAULT: '#fe7247',
          50: '#fff4ed',
          100: '#ffe6d8',
          200: '#fecdaf',
          300: '#feac7f',
          400: '#fe7247', // Main accent color
          500: '#fc4f1d',
          600: '#ed3309',
          700: '#c42409',
          800: '#9c1f0e',
          900: '#7e1e0f',
          950: '#440c05',
        },
        secondary: {
          DEFAULT: '#f9cc56',
          50: '#fffbeb',
          100: '#fef4c7',
          200: '#fee789',
          300: '#fdd44b',
          400: '#f9cc56', // Main secondary color
          500: '#f7b511',
          600: '#d98c09',
          700: '#b4690a',
          800: '#93520f',
          900: '#794410',
          950: '#422205',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'heading': ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #88dce5 0%, #fe7247 100%)',
        'gradient-accent': 'linear-gradient(135deg, #fe7247 0%, #f9cc56 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f9cc56 0%, #88dce5 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.05)',
        'soft-lg': '0 10px 30px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}