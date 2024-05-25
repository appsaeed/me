import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import sitemap from "vite-sitemap";
import buildconfing from "./vite-config/build";
import "./vite-config/global";
import manifest from "./vite-config/manifest";
import pwa from "./vite-config/pwa";
process.env.VITE_BASENAME

export default defineConfig({
  base: process.env.VITE_BASENAME,
  plugins: [
    solidPlugin(),
    sitemap({
      baseURL: process.env.VITE_LIVE_URL,
      urls: [
        "contact",
        "help-center",
        'ai-content-creation',
        'task',
        'prevous-portfolio',
        'timezones',
        'auxonic',
        "tailwindcss-admin-template"
      ],
    }),
    pwa({ manifest: manifest })
  ],
  server: {
    port: Number(process.env.VITE_PORT) || 31000,
  },
  build: buildconfing,
  preview: {
    port: 3300,
  },
});
