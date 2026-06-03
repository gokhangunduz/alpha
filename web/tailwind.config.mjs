/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        background:        'rgb(var(--color-bg) / <alpha-value>)',
        card:              'rgb(var(--color-card) / <alpha-value>)',
        'text-primary':    'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary':  'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-tertiary':   'rgb(var(--color-text-tertiary) / <alpha-value>)',
        'text-muted':      'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-dim':        'rgb(var(--color-text-dim) / <alpha-value>)',
        'text-strong':     'rgb(var(--color-text-strong) / <alpha-value>)',
        'accent-orange':   'rgb(var(--color-accent-orange) / <alpha-value>)',
        'accent-orange-h': 'rgb(var(--color-accent-orange-h) / <alpha-value>)',
        'accent-purple':   'rgb(var(--color-accent-purple) / <alpha-value>)',
        'accent-green':    'rgb(var(--color-accent-green) / <alpha-value>)',
        'accent-pink':     'rgb(var(--color-accent-pink) / <alpha-value>)',
      },
      maxWidth: {
        site:   '980px',
        narrow: '680px',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
    },
  },
};
