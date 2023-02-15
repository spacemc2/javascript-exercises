let obj = {
  key: ["Jamil", "Albrey"],
};

function getElementOfArrayProperty(obj, key, index) {
  // your code here

  if (obj[key] == undefined || !Array.isArray(obj[key]) || obj[key].length == 0)
    return undefined;

  return obj[key][index];
}
