module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '680px' },
    },
    extend: {
      colors: {
        base: '#F4F5F9',
        primary: {
          100: '#E6EBF4',
          200: '#A2B7CE',
          400: '#436E9E',
          500: '#165698',
          600: '#053461',
        },
        secondary: {
          100: '#FDE5F2',
          200: '#F4B8D9',
          400: '#DB579F',
          500: '#E3238B',
          600: '#AF0E65',
        },
        indicator: {
          danger: '#DB0F25',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
