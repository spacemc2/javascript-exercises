function getLengthOfLongestElement(arr) {
  // Your code here
  if (arr.length == 0) return 0;
  let longTemp = -99999;
  arr.map((itm) => {
    if (itm.length > longTemp) {
      longTemp = itm.length;
    }
  });
  return longTemp;
}

let output = getLengthOfLongestElement(["one", "two", "three"]);
console.log(output); // --> 5
