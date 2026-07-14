import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.10)",
        card: "0 18px 50px rgba(0, 0, 0, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
