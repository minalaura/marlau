import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1418",
        ivory: "#F7F6F2",
        stone: "#DAD5C8",
        sage: "#116B5A",
        sea: "#0A423C",
        charcoal: "#1A1E21",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      transitionTimingFunction: {
        quiet: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
