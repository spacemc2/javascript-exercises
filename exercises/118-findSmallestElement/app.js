function findSmallestElement(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let smallN = 999999;
  arr.map((num) => {
    if (num < smallN) smallN = num;
  });
  return smallN;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
