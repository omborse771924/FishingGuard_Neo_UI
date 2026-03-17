
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:"#0b0f1a",
        surface:"#0e1422",
        foreground:"#f7faff",
        primary:"#66e0ff",
        accent:"#7c5cff",
        success:"#4ade80",
        warning:"#fbbf24",
        danger:"#fb7185"
      },
      boxShadow:{
        glow:"0 0 40px rgba(124, 92, 255, .25), 0 0 80px rgba(102, 224, 255, .15)",
        card:"0 10px 30px rgba(0,0,0,.35)"
      },
      animation:{
        'float-slow':'float 10s ease-in-out infinite',
        'blob':'blob 18s ease-in-out infinite',
        'spin-slow':'spin 14s linear infinite'
      },
      keyframes:{
        float:{ '0%,100%':{ transform:'translateY(0px)' }, '50%':{ transform:'translateY(-12px)' } },
        blob:{
          '0%':{ borderRadius:'42% 58% 63% 37% / 41% 44% 56% 59%' },
          '33%':{ borderRadius:'58% 42% 37% 63% / 52% 38% 62% 48%' },
          '66%':{ borderRadius:'46% 54% 58% 42% / 47% 61% 39% 53%' },
          '100%':{ borderRadius:'42% 58% 63% 37% / 41% 44% 56% 59%' }
        }
      }
    }
  },
  plugins: [],
}
