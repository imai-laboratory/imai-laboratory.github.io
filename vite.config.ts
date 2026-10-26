import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import pandacss from "@pandacss/vite";

export default defineConfig({
  plugins: [pandacss(), vue()],
  base: "/",
  build: { outDir: "dist", sourcemap: true },
  server: { port: 5173 },
  run: {
    cache: {
      scripts: true,
      tasks: true,
    },
    tasks: {
      "cached-build": {
        command: "vp build",
        cache: {
          input: [{ auto: true }, "!dist/**", "!node_modules/**"],
          output: ["dist/**"],
        },
      },
    },
  },
});
