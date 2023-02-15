// Write your function here
const getOddLengthWordsAtProperty = (obj, key) => {
  if (obj[key] == undefined || !Array.isArray(obj[key])) return [];
  let newArray = [];
    for (const item of obj[key]) {
      if (item.length % 2 != 0) {
        newArray.push(item);
      }
    }
  return newArray;
};

let obj = {
  key: ["It", "has", "some", "words"],
};
console.log(getOddLengthWordsAtProperty(obj, "key"));
