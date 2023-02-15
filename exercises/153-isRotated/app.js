function isRotated(str1, str2) {
  // your code here
  // if (str1.length != str2.length) return false;

  // let newTemp = str2.split("");
  // for (let i = 0; i < str1.length; i++) {
  //   newTemp.push(newTemp[0]);
  //   newTemp.shift();

  //   if (newTemp.join("") === str1) return true;
  // }

  // return false;

  let fracc = str1.split("");
  let aux = [];
  for (let i of fracc) aux.push(str2.indexOf(i));
  let result = !aux.includes(-1);
  return result;
}

console.log(isRotated("hello world", "orldhello w")); // => true
console.log(isRotated("hello world", "omrel wp")); // => false
