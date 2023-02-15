function convertObjectToList(obj) {
  // your code here
  let newArray = [];
  for (const key in obj) {
    let temp = [];
    temp[0] = key;
    temp[1] = obj[key];
    newArray.push(temp);
  }
  return newArray;
}
