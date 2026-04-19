import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      colors: {
        accent: {
          DEFAULT: "#3b87ff",
          soft: "#60aaff",
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "pulse-soft": "pulse-soft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
