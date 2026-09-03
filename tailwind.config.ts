import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        yellow: "#ffe01b",
        ink: "#111318",
        paper: "#f2f1ee",
        fog: "#d8d6d1",
        mute: "#7a7c84",
        char: "#2c313f",
      },
      fontFamily: {
        sans: ["Satoshi", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        site: "1320px",
      },
      letterSpacing: {
        display: "-0.055em",
        tightish: "-0.045em",
      },
      keyframes: {
        ken: {
          from: { transform: "scale(1.08)" },
          to: { transform: "scale(1.18)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        eq: {
          "50%": { transform: "scaleY(0.35)" },
        },
        rise: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ken: "ken 22s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate",
        "ken-slow": "ken 26s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate",
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        eq: "eq 0.7s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
