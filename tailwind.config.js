/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0f0f0f',
        surface: '#1a1a1a',
        ink: '#f3f0ff',
        muted: '#beb8cf',
      },
      fontFamily: {
        outfit: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Google Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        slab: ['"Roboto Slab"', 'ui-serif', 'Georgia', 'serif'],
        quick: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, rgba(168,85,247,0.88), rgba(59,130,246,0.88))',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(8, 8, 12, 0.42)',
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 18px 45px rgba(76, 93, 247, 0.18)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 700ms ease-out both',
      },
    },
  },
}
