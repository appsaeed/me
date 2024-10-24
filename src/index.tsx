/* @refresh reload */

import { render } from "solid-js/web";

import { Router as BrowserRouter } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { deviceTheme, getThemeStore, setThemeStore } from "utilies";
import Routes from "./Router";
import settings from "./app/settings";
import "./assets/css/image.css";
import "./assets/css/patterns.css";
import "./index.css";
import FacebookChat from "./plugins/facebook-chat";
//@ts-ignore


if (!getThemeStore()) setThemeStore(deviceTheme);

document.documentElement.classList.add(getThemeStore());
document
  .querySelector('meta[name="theme-color"]')
  ?.setAttribute("content", settings.theme.color);

export const Index = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter base={settings.basename}>
        <Routes />
      </BrowserRouter>
      <div class="chat-top"></div>
      <FacebookChat pageId="102783358643262" />
    </QueryClientProvider>
  );
};
//dom selector
const selector = import.meta.env.VITE_MAIN_DOM || "%VITE_MAIN_DOM%";
const maindom = document.querySelector(selector) || document.body;

render(() => <Index />, maindom);
