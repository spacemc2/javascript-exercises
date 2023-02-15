function flipPairs(input) {
  // your code here
  console.log(input.length % 2);
  let revInput = "";
  for (let i = 0; i < input.length - (input.length % 2); i = i + 2) {
    revInput = revInput + input[i + 1] + input[i];
  }
  if (input.length % 2 == 0) {
    return revInput;
  } else {
    return revInput + input[input.length - 1];
  }
  //   let result = input.replace(/(.)(.)/gi, "$2$1");
  //   return result;
}

let input =
  "check out how interesting this problem is, it's insanely interesting!";
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
