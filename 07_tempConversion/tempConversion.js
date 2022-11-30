const convertToCelsius = function(temp) {
  let converted = (temp - 32) * 5/9;
  let result = Math.round(converted);
  return result;
};

const convertToFahrenheit = function(temp) {
  let converted = (temp * 9/5) + 32;
  let result = Math.round(converted);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
