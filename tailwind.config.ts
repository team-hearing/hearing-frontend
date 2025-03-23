import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kr: ['Noto Sans KR'],
        en: ['Open Sans'],
      },
      fontSize: {
        'hero': ['170px', { lineHeight: '1.1' }],
        'display': ['64px', { lineHeight: '72px' }],
        'h1': ['56px', { lineHeight: '64px' }],
        'h2': ['48px', { lineHeight: '56px' }],
        'h3': ['40px', { lineHeight: '48px' }],
        'h4': ['32px', { lineHeight: '40px' }],
        'h5': ['24px', { lineHeight: '32px' }],
        'h6': ['20px', { lineHeight: '28px' }],
        'p': ['16px', { lineHeight: '24px' }],
        'label': ['14px', { lineHeight: '22px' }],
        'tiny': ['12px', { lineHeight: '20px' }],
      },
      colors: {
        primary: '#00B493',
        secondary: '#F8496C',
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          light: '#F4F4F4',
          'light-medium': '#E0DFE1',
          medium: '#9E978D',
          'medium-dark': '#4A423E',
          dark: '#323232',
        }
      },
    },
  },
  plugins: [],
}; 

export default config;