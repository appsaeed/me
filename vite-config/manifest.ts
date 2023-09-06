import "./global";
import type { ManifestOptions } from "./pwa/type";
const manifest: ManifestOptions = {
  name: process.env.VITE_NAME || "app name",
  short_name: "Appsaeed",
  description: process.env.VITE_DESCRIPTION || "App description",
  theme_color: "#1e293b", //"#0f172a",
  background_color: "#1e293b", // "#1e293b",
  display: "standalone",
  scope: "./",
  start_url: "./",
  icons: [
    {
      src: "/icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-128x128.png",
      sizes: "128x128",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "maskable any",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable any",
    },
  ],
};

export default manifest;
