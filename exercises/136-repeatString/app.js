function repeatString(string, num) {
  // your code here
  let strsum = "";
  for (let i = 0; i < num; i++) {
    strsum += string;
  }
  return strsum;
}

let output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'
