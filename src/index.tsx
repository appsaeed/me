/* @refresh reload */

import { render } from "solid-js/web";

import { Router as BrowserRouter } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { deviceTheme, getThemeStore, setThemeStore } from "utilies";
import Routes from "./Router";
import settings from "./app/settings";
import "./assets/css/image.css";
import "./index.css";

if (!getThemeStore()) setThemeStore(deviceTheme);

document.documentElement.classList.add(getThemeStore());
document
  .querySelector('meta[name="theme-color"]')
  ?.setAttribute("content", settings.theme.color);

export const Index = () => {
  return (
    <BrowserRouter base={settings.basename}>
      <QueryClientProvider client={new QueryClient()}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
//dom selector
const selector = import.meta.env.VITE_MAIN_DOM || "%VITE_MAIN_DOM%";
const maindom = document.querySelector(selector) || document.body;

render(() => <Index />, maindom);
