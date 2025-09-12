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
        'neon-cyan': '#00e5ff',
        'vibrant-purple': '#b84fff',
        'golden-amber': '#ffd54f',
        'matte-black': '#0b0b0b',
        'charcoal-grey': '#121212',
        primary: 'var(--color-neon-cyan)',
        secondary: 'var(--color-vibrant-purple)',
        accent: 'var(--color-golden-amber)',
        background: 'var(--color-matte-black)',
        surface: 'var(--color-charcoal-grey)',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Orbitron', 'monospace', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

