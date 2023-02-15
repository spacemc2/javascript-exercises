function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  let longPallen = -99999;
  let longPal = "";
  for (let i = 0; i < sentence.length; i++) {
    let section = "";
    for (let j = i; j < sentence.length; j++) {
      section += sentence[j];
      if (isPalindrome(section) && section.length > longPallen) {
        longPal = section;
        longPallen = section.length;
      }
    }
  }

  return longPal;
}

function reverseString(string) {
  return string.toLocaleLowerCase().split("").reverse().join("");
}
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.toLocaleLowerCase() === reverseString(word);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"
