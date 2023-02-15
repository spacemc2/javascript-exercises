function flipEveryNChars(input, n) {
  function rep(n) {
    let regex = "";
    let code = "";
    for (let i = 0; i < n; i++) {
      code += `$${n - i}`;
      regex += "(.)";
    }
    let parsed = new RegExp(regex, "g");
    return [parsed, code];
  }
  // your code here
  let newInput = input.slice(0, Math.floor(input.length / n) * n);
  let rem = input.slice(Math.floor(input.length / n) * n);
  let parseCode1 = rep(n);
  let result1 = newInput.replace(parseCode1[0], parseCode1[1]);
  let parseCode2 = rep(rem.length);
  let result2 = rem.replace(parseCode2[0], parseCode2[1]);
  return result1 + result2;
  //   let reges = `(.{${n}})`;
  //   let parsed = new RegExp(reges);

  //   return input
  //     .split(parsed)
  //     .map((elm) => elm.split("").reverse().join(""))
  //     .join("");
}

let input = "watch my backflip";
let output = flipEveryNChars(input, 3);
console.log(output); // --> ohs axe trelpma
