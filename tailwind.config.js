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
          DEFAULT: '#667eea',
          50: '#f0f2ff',
          100: '#e4e8ff',
          200: '#cdd4ff',
          300: '#a6b3ff',
          400: '#7987ff',
          500: '#667eea',
          600: '#4f5bd5',
          700: '#434ab3',
          800: '#383d91',
          900: '#313774',
          950: '#1e2144',
        },
        accent: {
          DEFAULT: '#764ba2',
          50: '#f7f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#764ba2',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
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
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f9cc56 0%, #f7b320 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.05)',
        'soft-lg': '0 10px 30px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}