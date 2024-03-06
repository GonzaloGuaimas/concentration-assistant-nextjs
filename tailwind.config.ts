import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A86B",
        secondary: "#7E8491",
        gray: "#C0C3C9",
        white_dark: "#F1F3F3",
        white_light: "#F4F6F6",
        black: "#0E100F",
      },
    },
  },
  plugins: [],
};
export default config;
