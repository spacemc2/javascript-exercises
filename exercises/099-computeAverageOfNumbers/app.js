// Write your function here !
const computeAverageOfNumbers = (arr) => {
  let sum = 0;
  if (arr.length == 0) return 0;
  arr.map((item) => {
    sum += item;
  });
  return sum / arr.length;
};
