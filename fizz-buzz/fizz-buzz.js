'use strict';

module.exports = number => {
  let isDivisibleBy = function (modulo) {
    return number % modulo === 0;
  };

  let result = "";

  if (isDivisibleBy(3))  { result += 'fizz'; }
  if (isDivisibleBy(5))  { result += 'buzz'; }

  return result === '' ? number.toString() : result;
};
