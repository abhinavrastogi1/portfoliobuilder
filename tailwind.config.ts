import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // for App Router
    './pages/**/*.{js,ts,jsx,tsx}',  // for Page Router (if used)
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color:{
        primary:"hsl(var(--primary))"
      }
    },
  },
  plugins: [],
}

export default config
