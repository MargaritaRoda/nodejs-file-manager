import fs from "fs/promises";
import path from "path";
import { getTransformArr } from "./calculation.js";

export const ls = async () => {
  try {
    const files = await fs.readdir(process.cwd());
    const response = [];
    for (let file of files) {
      const extension = path.extname(file);
      response.push({ name: file, extension });
    }
    const result = getTransformArr(response);
    console.table(result);
  } catch (error) {
    console.log(error.message);
  }
};
