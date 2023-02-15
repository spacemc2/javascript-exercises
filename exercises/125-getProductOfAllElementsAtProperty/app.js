let obj = {
  key: [1, 2, 3, 4],
};

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key].length == 0)
    return 0;
  let mult = 1;
  obj[key].map((item) => {
    mult *= item;
  });
  return mult;
}
let output = getProductOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 24
