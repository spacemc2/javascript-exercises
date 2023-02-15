// Write your function here
const removeElement = (arr, discarder) => {
  return arr.filter((item) => {
    return item != discarder;
  });
};
console.log(removeElement([1, 2, 3, 2, 1], 2));
