// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://balkazak.github.io", // Replace with your GitHub username
  base: "/ict", // Replace with your repository name
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        mdi: [
          "check",
          "check-circle",
          "menu",
          "thunder",
          "bell",
          "chart-bell-curve-cumulative",
          "location",
          "cloud-warning",
          "monitor-eye",
          "robot",
          "alarm-light",
          "clipboard-text",
          "interaction-double-tap",
          "star-rate",
        ],
      },
    }),
  ],
});
