const convertToCelsius = function(n) {
  return round((n - 32) * (5 / 9));
};

const convertToFahrenheit = function(n) {
  return round((n * (9 / 5) + 32));
};

function round(n) {
  return Math.round(n * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
