function search(array, value, index = 0) {
  // your code here

  if (array.length == 1) {
    if (array[0] == value) return index;
    else return null;
  }
  let mid = Math.floor(array.length / 2);
  let firstPart = array.slice(0, mid);
  let secondPart = array.slice(mid);

  // return array[mid]
  if (value >= array[mid]) {
    return search(secondPart, value, (index = index + mid));
  } else {
    return search(firstPart, value, index);
  }
}

let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // => 4
