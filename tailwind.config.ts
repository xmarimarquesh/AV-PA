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
        amarelinho: "var(--amarelinho)",
        amarelo: "var(--amarelo)",
        amarelao: "var(--amarelao)",
        branco: "var(--branco)",
        azul: "var(--azul)",
        preto: "var(--preto)"
      },
    },
  },
  plugins: [],
};
export default config;
