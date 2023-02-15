function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  let string = "";
  // your code here
  string = string + this.parenthesize(this.getAreaCode());
  string = string + this.addspace(this.getExchangeCode());
  string = string + this.addline(this.getLineNumber());

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  // your code here
  let Join = this.slice(0, 3);
  return Join;
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  // your code here
  let Join = this.slice(3, 6);
  return Join;
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  // your code here
  let Join = this.slice(6);
  return Join;
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return "(" + string + ")";
};

PhoneNumberFormatter.prototype.addspace = function (string) {
  return " " + string;
};
PhoneNumberFormatter.prototype.addline = function (string) {
  return "-" + string;
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join("");
};

let output = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
console.log(output); // "(650) 835-9172"
