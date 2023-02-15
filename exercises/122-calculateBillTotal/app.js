function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  return preTaxAndTipAmount + preTaxAndTipAmount * 0.245;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9
