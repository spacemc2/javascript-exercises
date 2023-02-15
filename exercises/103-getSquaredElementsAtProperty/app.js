let obj = {
  key: [2, 1, 5],
};

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key])) return [];
  let sqr = [];
  obj[key].map((itm) => {
    sqr.push(itm * itm);
  });
  return sqr;
}

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
