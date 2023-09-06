import { Link } from "@solidjs/router";
import { For } from "solid-js";
import sections from "../../../data/className/sections";
import { Divattr } from "../../../types/dom";

type FooterLinksProps = {
  title: string;
  items: Array<{ name: string; link: string }>;
} & Divattr;
export default function FooterLinks({
  title,
  items,
  class: classes,
  ...args
}: FooterLinksProps) {
  return (
    <div
      {...args}
      class={`${sections.headerfooter.common} ${classes} py-8  sm:border-0 border-light `}
    >
      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
        {title}
      </h2>
      <ul class="text-gray-500 dark:text-gray-400 font-medium text-center">
        <For each={items}>
          {({ name, link }) => (
            <li class="mb-4">
              <Link href={link} class="hover:underline capitalize">
                {name}
              </Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
