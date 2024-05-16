import { Link } from "@solidjs/router";
import Image from "../../components/Image";
import logo from "../../data/logo";

export default function BrandLogo() {
  return (
    <Link href={"/"} class="flex items-center">
      <Image {...logo.default} alt="logo" class="h-8 mr-3" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:text-xl">
        {import.meta.env.VITE_NAME || "Saeed"}
      </span>
    </Link>
  );
}
