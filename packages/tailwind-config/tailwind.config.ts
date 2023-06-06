import { Config } from 'tailwindcss';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/pivot-ui/**/*.{js,ts,jsx,tsx}', './dist/*.html','./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          DEFAULT: '#1F3365',
          light: '#373272',
          dark: '#1a164e',
          black: '#000022',
        },
        secondary: {
          black: '#000000',
          900: '#1B1D21',
          800: '#262A33',
          600: '#515866',
          400: '#8a8f99',
          300: '#E3E4E5',
          200: '#EFEFEF',
          100: '#FBFBFB',
          white: '#FFFFFF',
        },
        success: {
          DEFAULT: '#2BAC47',
          light: '#EAF7ED',
        },
        warning: {
          DEFAULT: '#EF8943',
          light: '#FDF3EC',
        },
        danger: {
          DEFAULT: '#C83532',
          light: '#FAEBEB',
        },
      },
      borderWidth: {
        3: '3px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    iconsPlugin({
      collections: getIconCollections(['heroicons', 'tabler']),
    }),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
