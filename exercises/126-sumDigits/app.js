function sumDigits(num) {
  // your code here
  let strNum = "";
  if (num < 0) {
    strNum = String(num * -1);
  } else {
    strNum = String(num);
  }

  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    if (i == 0 && num < 0) {
      sum -= Number(strNum[i]);
    } else {
      sum += Number(strNum[i]);
    }
  }
  return sum;
}
let output = sumDigits(-316);
console.log(output); // --> 4
