import type { Config } from "tailwindcss"

const config = {
  darkMode: false, // Disable dark mode
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your existing theme configuration
    },
  },
  plugins: [],
};

export default config;
