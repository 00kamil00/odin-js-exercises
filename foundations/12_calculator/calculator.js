const add = function(num1, num2) {
  return num1 + num2
};


const subtract = function(num1, num2) {
	return num1 - num2
};


const sum = function(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
};


const multiply = function(arr) {
  result = 1
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};


const power = function(base, exponent) {
	return base ** exponent
};


const factorial = function(num) {
  let result = 1
  for (let i = num; i >= 1; i--) {
    result *= i
  }
  return result
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
