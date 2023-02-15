function transformEmployeeData(array) {
  // your code here
  let employees = [];
  array.map((employee) => {
    let temp = {};
    for (const field of employee) {
      temp[field[0]] = field[1];
    }
    employees.push(temp);
  });
  return employees;
}

let output = transformEmployeeData([
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
]);
console.log(output); // [{firstN
