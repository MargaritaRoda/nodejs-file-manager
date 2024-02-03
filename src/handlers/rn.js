import path from "path";
import { rename } from "fs/promises";

export const rn = async (oldFileName, newFileName) => {
  const oldFilePath = path.join(process.cwd(), oldFileName);
  const newFilePath = path.join(process.cwd(), newFileName);
  try {
    await rename(oldFilePath, newFilePath);
    console.log(`File ${oldFileName} renamed to ${newFileName}.`);
  } catch (error) {
    console.error(`Error renaming file ${oldFileName}:`, error);
  }
};
