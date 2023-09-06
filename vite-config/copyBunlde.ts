import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
type DataTypes = string;
type Options = {
  from: string;
  path: DataTypes;
};
export default function copyBunlde(filename: string, originalFile: string) {
  const buildSource = {
    name: filename,
    async writeBundle(options: { dir: string }) {
      try {
        const content = await readFile(resolve(options.dir, originalFile), "utf-8");
        await writeFile(resolve(options.dir, filename), content);
      } catch (error) {
        throw new Error(error);
      }
    },
  };

  return buildSource;
}
