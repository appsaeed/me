import { getThemeStore, homeURL, unSlash } from "utilies";
import { pathJoin } from "./utilies";

export default {
  name: "Appsaeed",
  mode: import.meta.env.BASE_URL,
  dev: import.meta.env.DEV,
  basename: unSlash(import.meta.env.VITE_BASENAME),
  url: homeURL(import.meta.env.VITE_BASENAME || "", "/"),
  homeURL: function (path?: string | number) {
    return pathJoin(this.url, path);
  },
  theme: {
    mode: getThemeStore(),
    color: getThemeStore() === "dark" ? "#e2e8f0" : "#0f172a",
    background: getThemeStore() === "dark" ? "#1e293b" : "#e2e8f0",
    dark: {
      color: "#e2e8f0",
      background: "#1e293b",
    },
    light: {
      color: "#0f172a",
      background: "#e2e8f0",
    },
    allClass:
      "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200",
    baClass: "bg-slate-200 dark:bg-slate-800",
    textClass: "text-slate-900 dark:text-slate-200",
  },
};
