/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './courses/**/*.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#040b17',
        surface: '#0a1424',
        surfaceSoft: '#0f1c31',
        surfaceElevated: '#132541',
        borderSubtle: '#223451',
        textMain: '#e4ecf8',
        textMuted: '#93a7c6',
        accent: '#f59e0b',
        accentSoft: '#f7ad3b',
        accentBlue: '#58a6ff',
        accentBlueSoft: '#8fc1ff',
      },
      maxWidth: {
        reading: '76ch',
      },
      boxShadow: {
        soft: '0 10px 36px rgba(2, 6, 23, 0.45)',
      },
    },
  },
  plugins: [],
}

