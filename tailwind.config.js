/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // UAE Design System primary palette
        'uae-gold': '#c78b29',
        'uae-gold-light': '#d7bc6d',
        'uae-gold-pale': '#f5edd8',
        'uae-dark': '#232528',
        'uae-card': '#fcfcfc',
        'uae-bg': '#f7f7f7',
        'uae-link': '#92722a',
        'uae-title': '#361e12',
        'uae-border': '#d7bc6d',
        'uae-text': '#232528',
        'uae-text-muted': '#6b7280',
        'uae-sidebar': '#1a1c1f',
        'uae-sidebar-hover': '#2a2d31',
        'uae-sidebar-active': '#c78b29',
        // Status colors
        'uae-success': '#16a34a',
        'uae-success-bg': '#f0fdf4',
        'uae-warning': '#ca8a04',
        'uae-warning-bg': '#fefce8',
        'uae-error': '#dc2626',
        'uae-error-bg': '#fef2f2',
        'uae-info': '#2563eb',
        'uae-info-bg': '#eff6ff',
      },
      fontFamily: {
        arabic: ['"Noto Kufi Arabic"', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'uae-sm': '6px',
        'uae-md': '8px',
        'uae-lg': '12px',
        'uae-xl': '16px',
      },
      boxShadow: {
        'uae-card': '0 1px 4px 0 rgba(35,37,40,0.08)',
        'uae-nav': '0 2px 8px 0 rgba(35,37,40,0.12)',
      },
    },
  },
  plugins: [],
}
