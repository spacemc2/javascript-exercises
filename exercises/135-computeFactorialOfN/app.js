function computeFactorialOfN(n) {
  // your code here
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

let output = computeFactorialOfN(3);
console.log(output); // --> 6
