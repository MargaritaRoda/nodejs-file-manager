import { createReadStream } from "fs";
import path from "path";

export const cat = async (filePath) => {
  const readStream = createReadStream(path.resolve(process.cwd(), filePath));
  readStream.on("data", (data) => {
    process.stdout.write(data);
  });
  readStream.on("error", (error) => {
    if (error.code === "ENOENT") {
      console.log(`${filePath} is not a file`);
    } else {
      console.error("Error reading file:", error);
    }
  });
  readStream.on("end", () => {});
};
