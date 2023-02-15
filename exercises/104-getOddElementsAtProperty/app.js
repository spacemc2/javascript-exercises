let obj = {
  key: [1, 2, 3, 4, 5],
};

function getOddElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key])) return [];

  let Odd = obj[key].filter((itm) => {
    return itm % 2 != 0;
  });
  return Odd;
}

let output = getOddElementsAtProperty(obj, "key");
console.log(output); // --> [1, 3, 5]
