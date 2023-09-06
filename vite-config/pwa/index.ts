import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { PluginOption } from "vite";

import { ManifestOptions } from "./type";
const MANIFEST_FILENAME = "manifest.webmanifest";
const SWJS_FILENAME = "sw.js";
const PWA_CACHE_NAME = "appsaeed_v1";
const BASE_NAME = process.env.VITE_BASENAME || "";

type BundleData = Record<string, any>;
interface Options {
  dir: string;
  html: string;
}
interface PWAConfig {
  basename?: string;
  //manifest options
  manifest: ManifestOptions;
  injectManifest?: boolean;
  manifestFilename?: string;
  //service worker options
  injectRegister?: "i" | "extarnal" | "module";
  swFilename?: string;
  cacheName?: string;
  cacheFiles?: string[];
  cacheIgnoreList?: string[];
}

export default function pwa(config: PWAConfig): PluginOption {
  const { manifest, manifestFilename } = config;
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
  const {
    manifestFilename = MANIFEST_FILENAME,
    injectRegister = true,
    basename = BASE_NAME,
    manifest,
  } = config;
  try {
    //manifest file path
    const manifestPath = resolve(basename, manifestFilename);
    //server worker path
    const serverWorkerPath = resolve(basename, "sw.js");

    //generate html tags
    let newHtml = `<link rel="manifest" href="${manifestPath}"/>`;
    if (injectRegister) {
      newHtml += `
        <script>
            if ("serviceWorker" in navigator) {
                window.addEventListener("load", () => {
                navigator.serviceWorker.register("${serverWorkerPath}", { scope: "${manifest.scope}" });
                });
            }
        </script>
      `;
    }
    const content = html.replace(/<\/head>/g, `${newHtml}</head>`);
    await writeFile(resolve(dir, "index.html"), content);
  } catch (error) {
    throw new Error(error);
  }
}

export async function createServiceWorker(
  options: Options,
  config: PWAConfig,
  bundle: BundleData
) {
  try {
    const { dir } = options;
    const {
      swFilename = SWJS_FILENAME,
      cacheName = PWA_CACHE_NAME,
      cacheFiles,
      cacheIgnoreList = [],
    } = config;
    const assetsList = [];

    //createing cache list
    if (!cacheFiles) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "asset") {
          //available keys fileName, Size, source.length of chunk
          assetsList.push(chunk.fileName);
        }
      }
    } else {
      assetsList.push(cacheFiles);
    }

    //cache ignoring list
    const pwa_chace_igno = [...cacheIgnoreList, "/asc", "/ftools", "/static"];

    //cache files list
    const pwa_cache_list = assetsList.filter((a) => !pwa_chace_igno.includes(a));

    //read service worker file
    let content = await readFile(resolve(__dirname, "sw.js"), "utf-8");
    //replace content to service worker
    //cache name
    content = content.replace(/"pwa_chace_name"/g, `"${cacheName}"`);
    //cache list
    content = content.replace(/\["pwa_cache_list"\]/g, JSON.stringify(pwa_cache_list));
    // cache ignored list
    content = content.replace(/\["pwa_chace_igno"\]/g, JSON.stringify(pwa_chace_igno));

    await writeFile(resolve(dir, swFilename), content);
  } catch (error) {
    throw new Error(error);
  }
}
