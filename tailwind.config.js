/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        '12xl': '96rem',
      },
      colors: {
        navy: {
          950: '#03060F',
          900: '#060C22',
          800: '#0A1435',
          700: '#0F1E4C',
          600: '#17296A',
          500: '#213A8C',
        },
        gold: {
          200: '#FBF0C9',
          300: '#F2DD9B',
          400: '#E8C465',
          500: '#D9A934',
          600: '#B4871F',
          700: '#8A6717',
        },
        sky: {
          300: '#8FC6FA',
          400: '#4FA3EF',
          500: '#2E82D6',
        },
        bone: '#EBEFF9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(232,196,101,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,196,101,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-cell': '46px 46px',
      },
      boxShadow: {
        'gold-glow': '0 0 60px -15px rgba(232,196,101,0.4)',
      },
    },
  },
  plugins: [],
}
