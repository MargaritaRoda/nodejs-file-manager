export const getTransformArr = (arr) => {
  const twoArr = arr.reduce(
    (acc, item) => {
      if (item.extension) {
        item.extension = "file";
        acc[1].push(item);
      } else {
        item.extension = "directory";
        acc[0].push(item);
      }
      return acc;
    },
    [[], []]
  );
  const sortedArr = (arr) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };
  return sortedArr(twoArr[0]).concat(sortedArr(twoArr[1]));
};
