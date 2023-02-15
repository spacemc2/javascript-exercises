function getLongestWordOfMixedElements(arr) {
  // your code here
  let bigStr = -99999;
  let longStr = "";
  if (arr.length == 0) return "";
  arr.map((item) => {
    if (typeof item == "string" && item.length > bigStr) {
      longStr = item;
      bigStr = item.length;
    }
  });
  if (bigStr == -99999) return "";
  return longStr;
}

let output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
