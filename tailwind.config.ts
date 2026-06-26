import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "15": "3.75rem",
        "18": "4.5rem",
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
