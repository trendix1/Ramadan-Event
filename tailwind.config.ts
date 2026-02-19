
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F9D58",
        soft: "#DFF5E1",
        dark: "#0B6E3E",
      },
    },
  },
  plugins: [],
};

export default config;
