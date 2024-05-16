import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { unSlash } from "utilies";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pathJoin(...paths: Array<any>) {
  return paths.map(unSlash).join("/");
}
export const urlJoin = pathJoin;
