function transformFirstAndLast(array) {
  // your code here
  let obj = {};
  obj[array[0]] = array[array.length - 1];
  return obj;
}

let output = transformFirstAndLast([
  "Kevin",
  "Bacon",
  "Love",
  "Hart",
  "Costner",
  "Spacey",
]);
console.log(output); // { Kevin: "Spacey" }
