function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  // your code here
  let term = Math.pow(
    1 + interestRate / compoundingFrequency,
    timeInYears * compoundingFrequency
  );

  return principal * term - principal;
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543
