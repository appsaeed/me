import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import sitemap from "vite-sitemap";
import buildconfing from "./vite-config/build";
import "./vite-config/global";
import manifest from "./vite-config/manifest";
import pwa from "./vite-config/pwa";


export default defineConfig({
  plugins: [
    solidPlugin(),
    sitemap({
      baseURL: process.env.VITE_LIVE_URL,
      urls: [
        "license",
        "privacy-policy",
        'term-and-conditions',
        'help-center'
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
