function getAllKeys(obj) {
  // your code here
  let keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
