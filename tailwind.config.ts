import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '850px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1800px',
        'max-lg': {
          max: '850px'
        },
        'max-sm': {
          max: '550px'
        },
        'max-xl': {
          max: '1300px'
        },
        'min-xl2': {
          min: '1800px'
        }
      },
      colors: {
        background: '#F8F3D9',
        foreground: '#B9B28A',
        primary: {
          DEFAULT: '#EBE5C2',
          foreground: '#504B38'
        },
        secondary: {
          DEFAULT: '#B9B28A',
          foreground: '#504B38'
        },
        accent: {
          DEFAULT: '#F8F3D9',
          foreground: '#504B38'
        },
        dark: '#504B38',
        card: {
          DEFAULT: '#EBE5C2',
          foreground: '#504B38'
        },
        popover: {
          DEFAULT: '#F8F3D9',
          foreground: '#504B38'
        },
        muted: {
          DEFAULT: '#EBE5C2',
          foreground: '#504B38'
        },
        destructive: {
          DEFAULT: '#EBE5C2',
          foreground: '#504B38'
        },
        border: '#B9B28A',
        input: '#F8F3D9',
        ring: '#EBE5C2',
        chart: {
          '1': '#F8F3D9',
          '2': '#EBE5C2',
          '3': '#B9B28A',
          '4': '#504B38',
          '5': '#F8F3D9'
        }
      },
      fontFamily: {
        kharkiv: [
          'Kharkiv Tone"',
          'sans-serif'
        ],
        kyivSerif: [
          'Kyiv*Type Serif"',
          'serif'
        ],
        kyivSans: [
          'Kyiv Type Sans"',
          'sans-serif'
        ],
        montserrat: [
          'Montserrat"',
          'sans-serif'
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
