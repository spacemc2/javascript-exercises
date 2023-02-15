function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) return "";
  let smalllen = 99999;
  let smallarr = "";
  arr.map((item) => {
    if (typeof item != "string") return "";
    if (item.length < smalllen) {
      smalllen = item.length;
      smallarr = item;
    }
  });
  return smallarr;
}
let output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'
