let obj = {
  key: [4, 1, 8],
};

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key.length == 0])
    return 0;
  let sum = 0;
  obj[key].map((item) => {
    sum += item;
  });
  return sum;
}
let output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13
