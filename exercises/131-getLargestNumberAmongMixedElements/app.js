function getLargestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let bigN = -99999;
  arr.map((item) => {
    if (typeof item == "number" && item > bigN) bigN = item;
  });
  if (bigN == -99999) return 0;
  return bigN;
}

let output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 5
