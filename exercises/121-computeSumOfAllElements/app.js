function computeSumOfAllElements(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let sum = 0;
  arr.map((item) => {
    sum += item;
  });
  return sum;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
