// Write your function here
const getElementsThatEqual10AtProperty = (obj, key) => {
  let newArray = [];
  if (typeof obj[key] == "undefined" || !Array.isArray(obj[key]))
    return newArray;

  for (const item of obj[key]) {
    if (item == 10) {
      newArray.push(item);
    }
  }
  return newArray;
};

// console.log(getElementsThatEqual10AtProperty({ a: 3 }, "e"));

console.log(getElementsThatEqual10AtProperty({ a: [1, 10] }, "a"));
