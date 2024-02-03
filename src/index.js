import readlinePromises from "readline/promises";
import { parseArgs } from "node:util";
import * as path from "path";
import { getOsInfo } from "./handlers/os.js";
import { getHash } from "./handlers/hash.js";
import { getCompress } from "./handlers/compress.js";
import { getDecompress } from "./handlers/decompress.js";
import { rm } from "./handlers/rm.js";
import { mv } from "./handlers/mv.js";
import { cp } from "./handlers/cp.js";
import { rn } from "./handlers/rn.js";
import { add } from "./handlers/add.js";
import { cd } from "./handlers/cd.js";
import { cat } from "./handlers/cat.js";
import { ls } from "./handlers/ls.js";
import * as os from "os";

// go to ~
process.chdir(os.homedir());

const getStart = () => {
  const args = parseArgs({
    options: {
      username: {
        type: "string",
        default: "noname",
      },
    },
    strict: false,
  });
  const username = args.values.username;

  console.log(
    `Welcome to the File Manager, ${username} \nYou are currently in ${process.cwd()}`
  );

  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (rawInput) => {
    let [cmd, ...rawArgs] = rawInput.trim().split(" ");
    const args = rawArgs.filter((arg) => Boolean(arg)); // "чистим" аргументы от повторных пробелов
    if (args.length > 2) {
      console.log("Invalid input");
    }
    switch (cmd) {
      case "up": {
        process.chdir(path.dirname(process.cwd()));
        console.log(`You are currently in ${process.cwd()}`);
        break;
      }
      case "cd": {
        await cd(args[0]);
        break;
      }
      case "ls": {
        await ls();
        break;
      }
      case "cat": {
        await cat(args[0]);
        break;
      }
      case "add": {
        await add(args[0]);
        break;
      }
      case "rn": {
        await rn(args[0], args[1]);
        break;
      }
      case "cp": {
        await cp(args[0], args[1]);
        break;
      }
      case "mv": {
        await mv(args[0], args[1]);
        break;
      }
      case "rm": {
        await rm(args[0]);
        break;
      }
      case "os": {
        console.log(getOsInfo(args[0]));
        break;
      }
      case "hash": {
        await getHash(args[0]);
        break;
      }
      case "compress": {
        await getCompress(args[0], args[1]);
        break;
      }
      case "decompress": {
        await getDecompress(args[0], args[1]);
        break;
      }
      case ".exit": {
        rl.close();
        break;
      }
      default: {
        console.log(`You are currently in ${process.cwd()}`);
      }
    }
  });

  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();
  });
};

getStart();
