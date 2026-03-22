import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ns-black': '#0A0A0A',
        'ns-gold': '#C9A84C',
        'ns-cream': '#FAF7F2',
        'ns-gray': '#555555',
        'ns-light': '#F0E8D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
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
          '0%, 100%': { boxShadow: '0 0 6px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 12px rgba(201,168,76,0.6), 0 0 20px rgba(201,168,76,0.2)' },
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
