function findPairForSum(array, number) {
  let newArray = array.filter((item) => {
    return item < number;
  });

  let restArray = [];
  for (let i = 0; i < newArray.length; i++) {
    restArray.push(number - newArray[i]);
  }

  for (let i = 0; i < restArray.length; i++) {
    if (newArray.includes(restArray[i])) return [newArray[i], restArray[i]];
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
