const tailwindcss = require('tailwindcss');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      h1: {
        fontSize: '2.25rem',
        lineHeight: 1.125,
        fontWeight: 600,
        letterSpacing: '.004em',
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Icons',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '0.75rem', // Extra Small - 12px
        sm: '0.875rem', // Small - 14px
        base: '1rem', // Base - 16px (matches macOS default)
        lg: '1.125rem', // Large - 18px
        xl: '1.25rem', // Extra Large - 20px
        '2xl': '1.5rem', // 2 Extra Large - 24px
        '3xl': '1.875rem', // 3 Extra Large - 30px
        '4xl': '2.25rem', // 4 Extra Large - 36px
        '5xl': '3rem', // 5 Extra Large - 48px
      },
      colors: {
        brand: '#203d85',
        gray: {
          100: '#F6F6F6',
          200: '#EBEBEB',
          300: '#D7D7D7',
          400: '#C2C2C2',
          500: '#A8A8A8',
          600: '#878787',
          700: '#6E6E6E',
          800: '#555555',
          900: '#3C3C3C',
        },
        blue: {
          100: '#EBF5FF',
          200: '#CEE7FF',
          300: '#99D6FF',
          400: '#66BDF7',
          500: '#33A1F2',
          600: '#218ECC',
          700: '#0F79A8',
          800: '#076485',
          900: '#044E62',
        },
        // Add more colors as needed
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '9999px', // mimic macOS rounded corners
      },
      boxShadow: {
        default:
          '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 4px 0 rgba(0, 0, 0, 0.1)', // subtle shadow similar to native elements
      },
    },
  },
  variants: {},
  plugins: [
    // Include any additional Tailwind CSS plugins here
  ],
};
