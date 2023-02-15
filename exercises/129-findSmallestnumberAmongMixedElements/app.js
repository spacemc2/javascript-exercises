function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let smallN = 99999;
  arr.map((item) => {
    if (item != "string" && item < smallN) smallN = item;
  });
  if (smallN == 99999) return 0;
  return smallN;
}

let output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4
