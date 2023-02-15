let obj = {
  key: [2, 1, 5],
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key].length == 0)
    return [];
  let smallTemp = 99999;
  obj[key].map((elm) => {
    if (elm < smallTemp) smallTemp = elm;
  });
  return smallTemp;
}
let output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1
