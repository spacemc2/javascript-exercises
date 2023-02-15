function listAllValues(obj) {
  // your code here
  let values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

let output = listAllValues({ name: "Krysten", age: 33, hasPets: false });
console.log(output); // ['Krysten', 33, false]
