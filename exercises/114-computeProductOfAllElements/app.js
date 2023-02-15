function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let mult = 1;
  arr.map((item) => {
    return (mult *= item);
  });
  return mult;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
