// Write your function here
const getElementsGreaterThan10AtProperty = (obj, key) => {
  let newArray = [];
  if (obj[key] === undefined || !Array.isArray(obj[key])) return [];

  for (const item of obj[key]) {
    if (item > 10) {
      newArray.push(item);
      console.log(item);
    }
  }
  return newArray;
};
