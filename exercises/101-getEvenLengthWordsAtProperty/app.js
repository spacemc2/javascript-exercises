let obj = {
  key: ["a", "long", "game"],
};
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (obj[key] == undefined || !Array.isArray(obj[key])) return [];
  let newArray = [];
  obj[key].map((word) => {
    if (word.length % 2 == 0) newArray.push(word);
  });
  return newArray;
}

let output = getEvenLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['long', 'game']
