function convertDoubleSpaceToSingle(str) {
    // your code here
    newstr = str.replaceAll('  ',' ')
    return newstr
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"