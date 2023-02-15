function findShortestElement(arr) {
  // your code here
  if (arr.length == 0) return "";
  let len = 999999;
  let shortWord = "";
  arr.map((word) => {
    if (word.length < len) {
      len = word.length;
      shortWord = word;
    }
  });
  return shortWord;
}

let output = findShortestElement(["a", "two", "three"]);
console.log(output); // --> 'a'
