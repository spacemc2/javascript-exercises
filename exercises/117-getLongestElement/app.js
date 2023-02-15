function getLongestElement(arr) {
  // your code here
  if (arr.length == 0) return "";
  let len = -999999;
  let lonWord = "";
  arr.map((word) => {
    if (word.length > len) {
      len = word.length;
      lonWord = word;
    }
  });
  return lonWord;
}
let output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'
