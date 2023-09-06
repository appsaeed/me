import { BuildOptions } from "vite";
import copyBunlde from "./copyBunlde";
import "./global";
const build: BuildOptions = {
  manifest: true,
  assetsDir: "",
  rollupOptions: {
    // output: {
    //   chunkFileNames: `[name]_chunk_[hash].js`,
    //   entryFileNames: `[name]_[hash].js`,
    //   assetFileNames: `[name]_[hash].[ext]`,
    // },
    plugins: [copyBunlde("404.html", "index.html")],
  },
};

export default build;
