function fromListToObject(array) {
  // your code here
  let obj = {};
  array.map((par) => {
    obj[par[0]] = par[1];
  });
  return obj;
}

let output = fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);
console.log(output); // => { make: 'Ford', model: 'Mustang', year: 1964 }
