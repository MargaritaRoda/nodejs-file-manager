import * as os from "os";

export const getOsInfo = (arg) => {
  switch (arg) {
    case "--EOL": {
      return os.EOL;
    }
    case "--cpus": {
      return os.cpus();
    }
    case "--homedir": {
      return os.homedir();
    }
    case "--username": {
      return os.userInfo().username;
    }
    case "--architecture": {
      return os.arch();
    }
  }
};
