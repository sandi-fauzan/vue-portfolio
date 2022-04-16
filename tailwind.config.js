module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#7c3aed',
        dark: '#0f172a',
        secondary: '#9ca3af'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
