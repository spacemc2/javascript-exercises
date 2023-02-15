function multiplyBetween(num1, num2) {
  // Your code here
  let prod = 1;
  if (num2 <= num1) return 0;
  for (let i = num1; i < num2; i++) {
    prod *= i;
  }
  return prod;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
