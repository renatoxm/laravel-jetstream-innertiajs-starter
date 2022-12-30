import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    hmr: {
      host: "localhost",
    },
  },
  plugins: [
    laravel({
      input: "resources/js/app.js",
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "resources/js"),
      "@components": path.resolve(__dirname, "resources/js/Components"),
      "@composables": path.resolve(__dirname, "resources/js/Composables"),
      "@pages": path.resolve(__dirname, "resources/js/Pages"),
      "@stores": path.resolve(__dirname, "resources/js/Stores"),
      "@static": path.resolve(__dirname, "resources/static"),
      "@shop": path.resolve(__dirname, "resources/js/Shop"),
      "@mock-data": path.resolve(__dirname, "resources/js/@mock-data"),
      ziggy: path.resolve(__dirname, "vendor/tightenco/ziggy/dist/vue.m"),
    },
  },
});
