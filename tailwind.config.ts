import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          'green': '#00ff00',
          'green-dim': '#00cc00',
          'green-bright': '#0fff0f',
          'black': '#000000',
          'dark': '#0a0e27',
          'darker': '#050a16',
          'accent': '#ff00ff',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px #00ff00',
        'glow-lg': '0 0 40px #00ff00',
        'glow-pulse': '0 0 5px #00ff00, inset 0 0 5px rgba(0, 255, 0, 0.1)',
      },
      textShadow: {
        'glow': '0 0 10px #00ff00, 0 0 20px #00ff00',
        'glow-lg': '0 0 20px #00ff00, 0 0 30px #00ff00',
      },
      backgroundImage: {
        'matrix-grid': 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'matrix-grid': '50px 50px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            'textShadow': '0 0 10px #00ff00, 0 0 20px #00ff00',
          },
          '50%': {
            'textShadow': '0 0 20px #00ff00, 0 0 30px #00ff00',
          },
        },
        fadeIn: {
          'from': {
            'opacity': '0',
          },
          'to': {
            'opacity': '1',
          },
        },
        slideUp: {
          'from': {
            'opacity': '0',
            'transform': 'translateY(20px)',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
