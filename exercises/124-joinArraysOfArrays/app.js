function joinArrayOfArrays(arr) {
  // your code here
  let flatArray = [];
  arr.map((item) => {
    item.map((subitem) => {
      flatArray.push(subitem);
    });
  });
  return flatArray;
}
let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
