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
          50: '#f0fbfc',
          100: '#dff6f9',
          200: '#c4eef3',
          300: '#9ae3eb',
          400: '#88dce5',
          500: '#5ecbd8',
          600: '#39b0c0',
          700: '#2d8e9c',
          800: '#297481',
          900: '#29616c',
          950: '#173f46',
        },
        accent: {
          DEFAULT: '#fe7247',
          50: '#fff6f2',
          100: '#feede6',
          200: '#fdd8c9',
          300: '#fcbaa0',
          400: '#fe9268',
          500: '#fe7247',
          600: '#f44d1e',
          700: '#cc3a14',
          800: '#a73215',
          900: '#882e18',
          950: '#491307',
        },
        secondary: {
          DEFAULT: '#f9cc56',
          50: '#fffbec',
          100: '#fff6d3',
          200: '#feeaa6',
          300: '#fcda6f',
          400: '#f9cc56',
          500: '#f7b320',
          600: '#e59412',
          700: '#bd7112',
          800: '#985618',
          900: '#7c471a',
          950: '#472408',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0a0c0d',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'heading': ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #88dce5 0%, #5ecbd8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #fe7247 0%, #f44d1e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f9cc56 0%, #f7b320 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}