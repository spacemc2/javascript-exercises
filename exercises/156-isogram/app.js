function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  // let arrayText = text.split("");
  // return arrayText.count();

  let dict = dictCount(text.toLocaleLowerCase().split(""));

  for (const key in dict) {
    if (dict[key] > 1) {
      return false;
    }
  }
  return true;
}

function dictCount(arrayText) {
  let dict = {};
  for (const item of arrayText) {
    if (dict[item] == undefined) {
      dict[item] = 1;
    } else {
      dict[item] += 1;
    }
  }
  return dict;
}

console.log(isIsogram("Camile")); // => true
console.log(isIsogram("Camille")); // => false
