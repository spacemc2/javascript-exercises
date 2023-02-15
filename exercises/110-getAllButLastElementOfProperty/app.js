let obj = {
  key: [1, 2, 3],
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key].length == 0)
    return [];

  return obj[key].slice(0, obj[key].length-1);
}

let output = getAllButLastElementOfProperty(obj, "key");
console.log(output); // --> [1,2]
