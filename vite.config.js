import { defineConfig } from "vite";

export default defineConfig({
  base: "/vite-vanilla-js-tailwind",

  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
    },
  },
});
