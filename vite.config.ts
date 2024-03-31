import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/∏
export default defineConfig({
  plugins: [
    vue(),
    checker({
      // typescript: true,
      vueTsc: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@/*": fileURLToPath(new URL("./src/*", import.meta.url)),
    },
  },
});
