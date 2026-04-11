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
          // Updated to match US Landing Page Brief v1.0
          primary: '#3B14C9',      // --purple-primary (buttons, active states)
          deep: '#1A0F6B',         // --purple-deep (hero BG, dark sections, footer)
          medium: '#9F7BFF',       // kept for gradients
          light: '#C9B8F5',        // --purple-light (card accents, pill badges)
          lighter: '#F3F0FF',      // --lavender-bg (section alternation background)
          peach: '#FFD2BB',
          'peach-light': '#F9EAE4',
          'deep-blue': '#1405D6',
        },
        text: {
          dark: '#1A1A2E',         // --text-dark (body copy on white)
          muted: '#6B6B8A',        // --text-muted (subtext, footnotes)
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-xl': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
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
        'soft': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'enterprise': '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
