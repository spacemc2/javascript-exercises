// Write your function here
const getElementsLessThan100AtProperty = (obj, key) => {
  let newArray = [];
  if (obj[key] == "undefined" || !Array.isArray(obj[key])) return [];
  for (const i of obj[key]) {
    if (i < 100) {
      newArray.push(i);
    }
  }
  return newArray;
};
