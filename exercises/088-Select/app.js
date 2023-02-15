// Write your function here
const select = (arr, obj) => {
  let newObj = {};
  for (const item in obj) {
    if (arr.includes(item)) {
      newObj[item] = obj[item];
    }
  }
  return newObj;
};

let arr = ["a", "c", "e"];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(select(arr, obj));
