import fs from "fs/promises";

export const rm = async (filePath) => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    console.error(`Failed remove: ${error.message}`);
  }
};
