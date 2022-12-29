/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          lightest: '#e4e4e7',
          lighter: '#a1a1aa',
          light: '#71717a',
          DEFAULT: '#52525b',
          dark: '#3f3f46',
          darker: '#27272a',
          darkest: '#18181b',
        },
        success: {
          light: '#4ade80',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        warning: {
          light: '#facc15',
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        danger: {
          light: '#f87171',
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
        dark: '',
        light: '',
      },
    },
  },
  plugins: [],
};
