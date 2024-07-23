const convertToCelsius = function(tempF) {
    tempC = (tempF - 32) * 5 / 9;
    return Math.round(tempC * 10) / 10; // round to one decimal place
};

const convertToFahrenheit = function(tempC) {
    tempF = tempC * 9 / 5 + 32;
    return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
