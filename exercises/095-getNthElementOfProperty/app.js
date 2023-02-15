// Write your function here
const getNthElementOfProperty = (obj, key, n) => {
  if (obj[key] === undefined || !Array.isArray(obj[key])) return undefined;

  return obj[key][n];
};

let obj = {
  key: [1, 2, 6],
};

console.log(getNthElementOfProperty(obj, "key", 1));
