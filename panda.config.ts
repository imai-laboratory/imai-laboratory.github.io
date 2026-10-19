import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx,vue}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "vue",
  theme: {
    extend: {
      tokens: {
        colors: {
          glass: {
            50: { value: "#f4f9fd" },
            100: { value: "#e7f2fa" },
            500: { value: "#27bef5" },
            900: { value: "#17354a" },
          },
        },
      },
    },
  },
});
