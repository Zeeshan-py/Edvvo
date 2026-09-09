import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "html-env-replace",
        transformIndexHtml(html) {
          return html.replace(
            /__OMNIDIM_KEY__/g,
            env.VITE_OMNIDIM_KEY ?? ""
          );
        },
      },
    ],
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});