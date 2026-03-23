import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ns-bg': 'var(--bg)',
        'ns-bg-card': 'var(--bg-card)',
        'ns-bg-elevated': 'var(--bg-elevated)',
        'ns-text': 'var(--text)',
        'ns-text-secondary': 'var(--text-secondary)',
        'ns-text-muted': 'var(--text-muted)',
        'ns-accent': 'var(--accent)',
        'ns-border': 'var(--border)',
        'ns-border-hover': 'var(--border-hover)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        btn: '12px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'nav-pulse': 'navPulse 2.5s ease-in-out infinite',
        'scroll-pulse': 'scrollPulse 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        navPulse: {
          '0%, 100%': { boxShadow: '0 0 6px var(--accent-glow)' },
          '50%': { boxShadow: '0 0 12px var(--accent-glow), 0 0 20px rgba(230,57,70,0.15)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
