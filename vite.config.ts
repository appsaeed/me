import { defineConfig } from "vite";
import buildconfing from "./vite-config/build";
import "./vite-config/global";
import AddPlugins from "./vite-config/plugins";

export default defineConfig({
  plugins: AddPlugins,
  server: {
    port: Number(process.env.sss) || 31000,
  },
  base: process.env.VITE_BASENAME,
  build: buildconfing,
  preview: {
    port: 3300,
  },
});
