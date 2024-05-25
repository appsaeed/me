import { Link } from "@solidjs/router";
import { BsGithub } from "solid-icons/bs";
import { FiMoon, FiSun } from "solid-icons/fi";
import { For, createSignal, onCleanup, onMount } from "solid-js";
import { getThemeStore, setThemeStore } from "utilies";
import { pathJoin } from "../../app/utilies";
import sections from "../../data/classNames/sections";
import menus from "../../data/menus";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isMobileMenu, setMobileMenu] = createSignal(false);
  const [dropdown, setDropdown] = createSignal(false);
  const [fixed, setFixed] = createSignal(false);
  onMount(() => {
    if (document.documentElement.scrollTop > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }

    function scrollToFixed() {
      const offset = document.documentElement.scrollTop;
      if (offset > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    //user dropdown menu hanlder
    const dropdownHandler = () => {
      if (!dropdown()) return false;
      setDropdown(false);
      return false;
    };
    //user dropdown menu click hanlder fire
    document.body.addEventListener("click", dropdownHandler);

    //page scroll event fire
    window.addEventListener("scroll", scrollToFixed);
    onCleanup(() => {
      //clear scoll event listener
      window.removeEventListener("scroll", scrollToFixed);
      //clear document event listener
      document.body.removeEventListener("click", dropdownHandler);
    });
  });

  return (
    <header
      id="header"
      class={`transition-all z-[999] top-0 left-0 right-0 w-full bg-slate-200 dark:bg-slate-800 shadow-2xl  fixed ${
        fixed() ? "fixeds py-3" : "py-4"
      }`}
    >
      <nav class={`${sections.headerfooter.common} w-full`}>
        <div class="w-full flex flex-wrap items-center justify-between mx-auto">
          <BrandLogo />

          <SwtichTheme />

          <div class="flex items-center md:order-2">
            <a href="http://github.com/appsaeed" target="_blank">
              <BsGithub class=" text-3xl" />
            </a>
          </div>

          <div class="flex items-center md:order-2">
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onclick={() => setMobileMenu(!isMobileMenu())}
              onBlur={() => setMobileMenu(false)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            class={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all ${
              isMobileMenu()
                ? "max-md:opacity-100 max-md:visible"
                : "max-md:opacity-0 max-md:h-0 max-sm:invisible"
            }`}
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  max-md:bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 max-md:dark:bg-gray-900 max-sm:dark:border-gray-700">
              <For each={menus}>
                {(props) => {
                  return <MenuList {...props} />;
                }}
              </For>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

type MenuListProps = (typeof menus)[number];
export function MenuList({ name, path, icon: Icon }: MenuListProps) {
  return (
    <li>
      <Link
        href={path ? pathJoin(path) : `/#${String(name).toLocaleLowerCase()}`}
        class={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize`}
      >
        <span class="flex items-center">
          {Icon && <Icon class="mr-1" />} {name}
        </span>
      </Link>
    </li>
  );
}

export function SwtichTheme() {
  const [dark, setDark] = createSignal(getThemeStore() === "dark");

  const handleTheme = () => {
    const theme = dark() ? "light" : "dark";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(theme);
    setThemeStore(theme);
    setDark(!dark());
  };

  return (
    <div
      onClick={handleTheme}
      class={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer text-2xl`}
    >
      {dark() ? <FiMoon /> : <FiSun />}
    </div>
  );
}
