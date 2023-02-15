function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key].length == 0)
    return 0;
  let sum = 0;
  obj[key].map((item) => {
    sum += item;
  });
  return sum / obj[key].length;
}
