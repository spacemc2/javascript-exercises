function addToFrontOfNew(arr, element) {
    // Write your function here
    var newArr = []

    newArr.push(element)
    arr.forEach((n) => {
        newArr.push(n)
    })

    return newArr

}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]