function filterOddLengthWords(words) {
  // your code here
  let newWords = words.filter((word) => {
    return word.length % 2 != 0;
  });
  return newWords;
}

let output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output); // --> ['there', "now']
