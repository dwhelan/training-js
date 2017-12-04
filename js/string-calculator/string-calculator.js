'use strict';

module.exports = function (numberString) {

  const delimiters = /,|\n/;

  return numberString
    .split(delimiters)
    .filter(number => +number <= 1000)
    .reduce((total, number) => total + +number, 0);
};
