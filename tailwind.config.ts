import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0066FF",
          sky: "#38BDF8",
          black: "#0F172A",
          white: "#FFFFFF",
        },
        realm: {
          twilight: "#0D0B1A",
          night: "#161230",
          orchid: "#B794F6",
          blush: "#E8B4C8",
          mauve: "#C9A0B8",
          cream: "#F5F0EB",
          pearl: "#EDE5DD",
          glow: "#F0E4FF",
          mist: "#D6CCE6",
        },
      },
      fontFamily: {
        sans: ['Sloth', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'realm-sky': 'linear-gradient(180deg, #1A1040 0%, #2D1B4E 25%, #4A2560 45%, #7B3D65 60%, #A5546A 75%, #C4705E 90%, #D4896A 100%)',
        'realm-sky-subtle': 'linear-gradient(180deg, #0D0B1A 0%, #1A1040 50%, #2D1B4E 100%)',
        'realm-orb': 'radial-gradient(circle, #F0E4FF 0%, rgba(183,148,246,0.25) 40%, transparent 70%)',
      },
      boxShadow: {
        'realm-glow-sm': '0 0 20px rgba(183, 148, 246, 0.15)',
        'realm-glow': '0 0 40px rgba(183, 148, 246, 0.2)',
        'realm-glow-lg': '0 0 60px rgba(183, 148, 246, 0.3), 0 0 120px rgba(183, 148, 246, 0.1)',
        'realm-orb': '0 0 80px rgba(240, 228, 255, 0.4), 0 0 160px rgba(183, 148, 246, 0.15)',
        'realm-human': '0 0 30px rgba(232, 180, 200, 0.3), 0 0 60px rgba(183, 148, 246, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
