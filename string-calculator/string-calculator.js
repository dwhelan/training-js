'use strict';

function toInteger(string) {
  return parseInt(string);
}

function numbersInRange(number) {
  return number <= 1000;
}

function sum(sum, number) {
  return sum + number;
}

module.exports = function(numericString) {
  if (numericString === '') {
    return 0;
  }

  const seperators = /[\n|,]/;

  return numericString
    .split(seperators)
    .map(toInteger)
    .filter(numbersInRange)
    .reduce(sum);
};
