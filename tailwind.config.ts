import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bach': {
          'parchment': '#F5E6D3',
          'ink': '#2C1810',
          'gold': '#B8860B',
          'red': '#8B0000',
          'brown': '#4A3728',
        },
      },
      fontFamily: {
        'serif': ['var(--font-crimson)'],
        'display': ['var(--font-playfair)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 