import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";

export const cp = async (filePath, dirPath) => {
  try {
    const readStream = createReadStream(path.resolve(process.cwd(), filePath));
    const writeStream = createWriteStream(path.resolve(process.cwd(), dirPath));
    await pipeline(readStream, writeStream);
  } catch (error) {
    console.error(error.message);
  }
};
