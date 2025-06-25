import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',    // for App Router
    './src/pages/**/*.{js,ts,jsx,tsx}',  // for Page Router (if used)
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout-provider/**/*.{js,ts,jsx,tsx}',

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
