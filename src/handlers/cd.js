import path from "path";
import fsPromises from "fs/promises";

export const cd = async (filePath) => {
  const filePathByUser = path.resolve(process.cwd(), filePath);
  let stat;
  try {
    stat = await fsPromises.stat(filePathByUser);
  } catch (err) {
    console.log(`Invalid input. ${filePathByUser} doesn't exist`);
    return;
  }
  if (!stat.isDirectory()) {
    console.log(`Invalid input. ${filePathByUser} is not a directory`);
    return;
  }
  process.chdir(filePathByUser);
  console.log(`You are currently in ${process.cwd()}`);
};
