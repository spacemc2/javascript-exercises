// Write your function here
const countAllCharacters = (str) => {
  let newObj = {};
  for (const item of str) {
    if (newObj[item] == undefined) {
      newObj[item] = 1;
    } else {
      newObj[item] = newObj[item] + 1;
    }
  }
  return newObj;
};
console.log(countAllCharacters("dddddfdsfgewgf"));
