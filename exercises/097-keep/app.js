// Write your function here
const keep = (arr, keeper) => {
  let newArray = arr.filter((item) => {
    return item == keeper;
  });
  return arr;
};

console.log(keep([1, 2, 3, 2, 1], 2));
