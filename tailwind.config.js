/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'arvi-navy': '#1E293B',
        'fixa-orange': '#F97316',
        'hygex-green': '#10B981',
        'indupack-purple': '#6366F1'
      }
    },
  },
  plugins: [],
}