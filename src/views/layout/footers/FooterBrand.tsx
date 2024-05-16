import { Link } from "@solidjs/router";
import settings from "../../../app/settings";

import Image from "../../../components/Image";
import sections from "../../../data/classNames/sections";
import logo from "../../../data/logo";
import { Divattr } from "../../../types/dom";
type FooterBrandProps = {
  title?: string;
} & Divattr;
export default function FooterBrand({
  title = "Brand",
  class: className,
  ...args
}: FooterBrandProps) {
  return (
    <div
      {...args}
      class={`${className} py-8 sm:border-0 border-light ${sections.headerfooter.common}`}
    >
      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white max-sm:text-center">
        {title}
      </h2>
      <p class=" text-sm font-light my-6 max-sm:text-center">
        We make web applications for your business or personal website as you
        are in demand. Get started your project with us get a super fast website
        and long-time support. Usually, we use the latest technology (
        programming and tools ) and always try to keep up to date the website or
        web application.
        <br />
        <br />
        Manage your world easily and funnily get success growing!
      </p>
      <div class="flex justify-center sm:justify-start my-6">
        <Link href={"/"} class="flex items-center justify-center">
          <Image {...logo.default} class="w-auto h-16" alt={settings.name} />
        </Link>
      </div>
    </div>
  );
}
