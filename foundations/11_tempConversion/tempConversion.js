const convertToCelsius = function(temp1) {
  c_temp = (temp1 - 32) * (5 / 9)
  c_result = Math.round(c_temp * 10) / 10
  return c_result
}

const convertToFahrenheit = function(temp2) {
  f_temp = (temp2 * (9 / 5)) + 32
  f_result = Math.round(f_temp * 10) / 10
  return f_result
}

convertToCelsius(32) // fahrenheit to celsius, should return 0
convertToFahrenheit(0) // celsius to fahrenheit, should return 32


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}
