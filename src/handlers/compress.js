import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

export const getCompress = async (filePath, dirPath) => {
  const pathToFile = path.resolve(process.cwd(), filePath);
  const pathToDirectory = path.resolve(process.cwd(), dirPath);
  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(pathToDirectory);
  try {
    await pipeline(readStream, createGzip(), writeStream);
  } catch (error) {
    console.log(error.message);
  }
};
