import { createWriteStream } from "fs";
import path from "path";

export const add = async (newFileName) => {
  try {
    const writeStream = createWriteStream(
      path.resolve(process.cwd(), newFileName)
    );
    writeStream.on("finish", () => {});
    await new Promise((resolve, reject) => {
      writeStream.on("error", (error) => {
        console.error(`Error creating file ${newFileName}:`, error);
        reject(error);
      });
      writeStream.end(() => {
        resolve();
      });
    });
  } catch (error) {
    console.error(`Error creating file ${newFileName}:`, error);
  }
};
