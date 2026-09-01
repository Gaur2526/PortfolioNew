import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
          },
        },
        sm: {
          css: {
            maxWidth: "65ch",
          },
        },
        base: {
          css: {
            maxWidth: "65ch",
          },
        },
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
};

export default config;
