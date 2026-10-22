import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import pandacss from "@pandacss/vite";

export default defineConfig({
  plugins: [pandacss(), vue()],
  base: "/",
  build: { outDir: "dist", sourcemap: true },
  server: { port: 5173 },
});
