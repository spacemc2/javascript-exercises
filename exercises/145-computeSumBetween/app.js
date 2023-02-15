function computeSumBetween(num1, num2) {
  // Your code here
  let sum = 0;
  if (num2 <= num1) return 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
