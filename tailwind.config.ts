import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#F3F6FA",
          100: "#E4EAF2",
          700: "#16345C",
          800: "#102848",
          900: "#0B1F3A",
          950: "#071422",
        },
        safety: {
          DEFAULT: "#F26A1B",
          hover: "#DE5C12",
          ink: "#8C3408",
          soft: "#FFF4EC",
        },
        mist: "#F4F6F8",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 31, 58, 0.06), 0 8px 24px rgba(11, 31, 58, 0.06)",
        lift: "0 10px 28px rgba(11, 31, 58, 0.12)",
      },
      borderRadius: {
        card: "12px",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [typography],
};

export default config;
