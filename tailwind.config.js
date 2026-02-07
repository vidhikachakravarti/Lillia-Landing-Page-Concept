/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lillia: {
          primary: '#7848FE',
          deep: '#280470',
          medium: '#9F7BFF',
          light: '#D3B9F9',
          lighter: '#EADEFC',
          peach: '#FFD2BB',
          'peach-light': '#F9EAE4',
          'deep-blue': '#1405D6',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2rem', { lineHeight: '1.25' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3' }],
        'heading-md': ['1.5rem', { lineHeight: '1.35' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(120, 72, 254, 0.08)',
        'soft-lg': '0 4px 40px rgba(120, 72, 254, 0.12)',
        'enterprise': '0 1px 3px rgba(40, 4, 112, 0.06), 0 1px 2px rgba(40, 4, 112, 0.03)',
      },
    },
  },
  plugins: [],
}
