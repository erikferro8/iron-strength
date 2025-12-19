import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF5F5",
          100: "#FEECEC",
          200: "#FCD4D4",
          300: "#F7A9A9",
          400: "#E97878",
          500: "#D65A5A",
          600: "#C84E4E",
          700: "#B04343",
          800: "#8E3636",
          900: "#6F2A2A",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
