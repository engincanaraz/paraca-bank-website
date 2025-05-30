/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: [
          "Nunito",
          "SF Pro Rounded",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "corporate"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
