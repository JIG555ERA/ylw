// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'vibrant-purple': '#7C3AED',
        'vibrant-pink': '#EC4899',
        'vibrant-green': '#10B981',
        'vibrant-emerald': '#059669',
        'pastel-purple': '#C4B5FD',
        'pastel-pink': '#FBCFE8',
      },
      screens: {
        '2xl': '1536px', // override/ensure availability
        '4xl': '1600px', // your custom breakpoint
      }
    }
  },
  plugins: []
};
