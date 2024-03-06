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
        primary: "#044d50",
        secondary: "#7E8491",
        gray: "#C0C3C9",
        light_gray: "#EEEEEE",
        dark_gray: "#828385",
        dark_white: "#F1F3F3",
        light_white: "#F4F6F6",
        black: "#0E100F",
      },
    },
  },
  plugins: [],
};
export default config;
