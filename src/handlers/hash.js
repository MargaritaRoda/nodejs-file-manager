import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";

export const getHash = async (filePath) => {
  const hash = createHash("sha256");
  const pathToFile = path.resolve(process.cwd(), filePath);
  const newReadStream = createReadStream(pathToFile);
  newReadStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  newReadStream.on("end", () => {
    console.log("hash", hash.digest("hex"));
  });
};
