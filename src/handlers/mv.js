import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import fs from "fs/promises";

export const mv = async (filePath, dirPath) => {
  try {
    const readStream = createReadStream(path.resolve(process.cwd(), filePath));
    const writeStream = createWriteStream(path.resolve(process.cwd(), dirPath));
    await pipeline(readStream, writeStream);
    await fs.rm(filePath);
  } catch (error) {
    console.error(error.message);
  }
};
