function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers) / array_of_numbers.length;
}

function sum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(average([1, 2, 3, 4]));
