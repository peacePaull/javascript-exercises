const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  for (let i in arr) {
    total += arr[i];
  }return total
};

const multiply = function(arr) {
  let sum=1;
    for (let i=0; i<arr.length; i++) {
        sum = sum * arr[i];
    } 
    return sum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
