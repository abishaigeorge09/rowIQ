/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A0F1E',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        'text-primary': '#CBD5E1',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        'text-dim': '#475569',
        'card-bg': 'rgba(27,58,107,0.12)',
        'card-border': 'rgba(37,99,235,0.2)',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
