function getLargestElement(arr) {
  // your code here

  if (arr.length == 0) return 0;
  let bigN = -999999;
  arr.map((num) => {
    if (num > bigN) bigN = num;
  });
  return bigN;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
