function detectOutlierValue(string) {
  // your code here
  let evenArray = [];
  let oddArray = [];
  oddArray = string.split(" ").filter((item) => {
    return Number(item) % 2 != 0;
  });
  evenArray = string.split(" ").filter((item) => {
    return Number(item) % 2 == 0;
  });
  if (oddArray.length > evenArray.length) {
    return string.split(" ").indexOf(evenArray[0])+1;
  } else {
    return string.split(" ").indexOf(oddArray[0])+1;
  }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1")); //=> 2
