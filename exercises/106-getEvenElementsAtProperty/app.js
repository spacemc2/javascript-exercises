let obj = {
  key: [1000, 11, 50, 17],
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key])) return [];
  let evenN = obj[key].filter((item) => {
    return item % 2 == 0;
  });
  return evenN;
}
let output = getEvenElementsAtProperty(obj, "key");
console.log(output); // --> [1000, 50]
