import { defineConfig } from "vite";

export default defineConfig({
  base: "/todo-django-tailwind-pages",

  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
    },
  },
});
