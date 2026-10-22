import { defineConfig } from "@pandacss/dev";
import { globalStyles } from "./src/styles/global";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx,vue}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "vue",
  globalCss: {
    ...globalStyles,
    ".glass-panel": {
      background: "surface",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "line",
      boxShadow: "glass",
      backdropFilter: "blur(22px) saturate(150%)",
      WebkitBackdropFilter: "blur(22px) saturate(150%)",
    },
    ".glass-card": {
      background: "surface",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "lineDark",
      borderRadius: "page",
      boxShadow: "glass",
      padding: "clamp(1.25rem, 3vw, 2rem)",
      backdropFilter: "blur(22px) saturate(150%)",
      WebkitBackdropFilter: "blur(22px) saturate(150%)",
    },
    ".button": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      minHeight: "42px",
      padding: "9px 16px",
      borderRadius: "13px",
      border: "1px solid transparent",
      fontWeight: 700,
      fontSize: "0.9rem",
      transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
    },
    ".button:hover": {
      transform: "translateY(-1px)",
    },
    ".button-primary": {
      color: "white",
      background: "linear-gradient(135deg, #35c4f2, #1797d4)",
      boxShadow: "0 7px 18px rgba(39, 170, 220, 0.24), inset 0 1px rgba(255, 255, 255, 0.32)",
    },
    ".button-primary:hover": {
      color: "white",
      boxShadow: "0 10px 22px rgba(39, 170, 220, 0.32)",
    },
    ".button-glass": {
      color: "ink",
      background: "rgba(255, 255, 255, 0.58)",
      borderColor: "rgba(255, 255, 255, 0.9)",
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          ink: { value: "#17354a" },
          inkSoft: { value: "#456174" },
          primary: { value: "#27aee4" },
          primaryDeep: { value: "#1684bd" },
          surface: { value: "rgba(255, 255, 255, 0.62)" },
          surfaceStrong: { value: "rgba(255, 255, 255, 0.78)" },
          line: { value: "rgba(255, 255, 255, 0.86)" },
          lineDark: { value: "rgba(103, 151, 180, 0.22)" },
          pageHeroStart: { value: "#15516e" },
          pageHeroMiddle: { value: "#168cb8" },
          pageHeroEnd: { value: "#39bce5" },
          eyebrow: { value: "#b9edff" },
          skeletonSurface: { value: "rgba(220, 235, 243, 0.52)" },
          skeletonHighlight: { value: "rgba(255, 255, 255, 0.86)" },
          skeletonLine: { value: "rgba(112, 155, 177, 0.2)" },
          glass: {
            50: { value: "#f4f9fd" },
            100: { value: "#e7f2fa" },
            500: { value: "#27bef5" },
            900: { value: "#17354a" },
          },
        },
        radii: {
          page: { value: "24px" },
          skeleton: { value: "16px" },
        },
        shadows: {
          glass: {
            value: "0 18px 52px rgba(52, 102, 134, 0.11), 0 2px 8px rgba(47, 88, 114, 0.05)",
          },
        },
      },
    },
  },
});
