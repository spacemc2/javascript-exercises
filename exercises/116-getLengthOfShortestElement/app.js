function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length == 0) return 0;
  let len = 999999;
  arr.map((word) => {
    if (word.length < len) len = word.length;
  });
  return len;
}
let output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
