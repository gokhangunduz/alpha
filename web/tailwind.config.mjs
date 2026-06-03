/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg:           'rgb(var(--c-bg) / <alpha-value>)',
        surface:      'rgb(var(--c-surface) / <alpha-value>)',
        border:       'rgb(var(--c-border) / <alpha-value>)',
        fg:           'rgb(var(--c-fg) / <alpha-value>)',
        muted:        'rgb(var(--c-muted) / <alpha-value>)',
        dim:          'rgb(var(--c-dim) / <alpha-value>)',
        accent:       'rgb(var(--c-accent) / <alpha-value>)',
        'accent-h':   'rgb(var(--c-accent-h) / <alpha-value>)',
      },
      maxWidth: {
        site: '980px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'Monaco', '"Cascadia Code"', 'monospace'],
      },
    },
  },
};
