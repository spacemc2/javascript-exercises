// Write your function here
const getLastElementOfProperty = (obj, key) => {
  if (obj[key] === undefined || !Array.isArray(obj[key])) return undefined;

  return obj[key][obj[key].length - 1];
};
