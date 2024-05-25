import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { PluginOption } from "vite";

import { ManifestOptions } from "./type";
const MANIFEST_FILENAME = "manifest.webmanifest";
const SWJS_FILENAME = "sw.js";
type BundleData = Record<string, any>;

interface Options {
  dir: string;
  html: string;
}
interface PWAConfig {
  manifest: ManifestOptions;
  manifestFilename?: string;
  swRegister?: "inline" | "";
  injectSW?: boolean;
  swFilename?: string;
}

export default function pwa(config: PWAConfig): PluginOption {
  return {
    name: "pwa",
    async writeBundle(outputOptions, bundle: Record<string, any>) {
      const dir = String(outputOptions.dir);
      const template = await readFile(resolve(dir, "index.html"), "utf-8");
      //assign the option object with NormalizedOutputOptions and entry html string
      const options: Options = { dir, html: template };

      //create manifest file
      createManifest(options, config);

      //create service worker
      createServiceWorker(options, config, bundle);

      //add manifest to bundle html
      addServiceWorkerToHtml(options, config);

      //add service worker to bundle html
    },
  };
}

export async function createManifest(options: Options, config: PWAConfig): Promise<void> {
  const { dir, html } = options;
  const { manifestFilename = MANIFEST_FILENAME, manifest } = config;
  try {
    const content = JSON.stringify(manifest);
    await writeFile(resolve(dir, manifestFilename), content);
  } catch (error) {
    throw new Error(error);
  }
}

export async function addServiceWorkerToHtml(options: Options, config: PWAConfig) {
  const { dir, html } = options;
  const { manifestFilename = MANIFEST_FILENAME, injectSW = true } = config;
  try {
    //manifest file path
    const manifestPath = resolve(dir, manifestFilename).replace(dir, "");
    //server worker path
    const serverWorkerPath = resolve(dir, "sw.js").replace(dir, "");

    //generate html tags
    let newHtml = `<link rel="manifest" href="${manifestPath}"/></head>`;
    if (injectSW) {
      newHtml += `
        <script>
            if ("serviceWorker" in navigator) {
                window.addEventListener("load", () => {
                navigator.serviceWorker.register("${serverWorkerPath}", { scope: "${process.env.BASE || '/'}" });
                });
            }
        </script>
      `;
    }
    const content = html.replace(/<\/head>/g, newHtml);
    await writeFile(resolve(dir, "index.html"), content);
  } catch (error) {
    throw new Error(error);
  }
}

export async function createServiceWorker(options: Options, config: PWAConfig, bundle: BundleData) {
  try {
    const { dir } = options;
    const { swFilename = SWJS_FILENAME } = config;
    const assetsList = [];
    for (const chunk of Object.values(bundle)) {
      if (chunk.type === "asset") {
        // console.log("Asset:", chunk.fileName, "Size:", chunk.source.length, "bytes");
        // You can collect or process asset information as needed
        assetsList.push(chunk.fileName);
      }
    }

    //read
    const swSource = await readFile(resolve(__dirname, "sw.js"), "utf-8");
    const content = swSource.replace(/"add_cache_list"/g, JSON.stringify(assetsList));

    await writeFile(resolve(dir, swFilename), content);
  } catch (error) {
    throw new Error(error);
  }
}
