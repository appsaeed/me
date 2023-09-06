import { PluginOption } from "vite";
import solid from "vite-plugin-solid";
import "./global";
import manifest from "./manifest";
import pwa from "./pwa";

const plugins: PluginOption[] = [
  solid(),
  pwa({ manifest: manifest }),
  // VitePWA({
  //   manifest: manifest,
  //   registerType: "autoUpdate",
  //   injectRegister: "script",
  // }),
];

export default plugins;
