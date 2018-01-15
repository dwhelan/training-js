'use strict';

module.exports = function(number){
  function aFizzNumber() {
    return number % 3 === 0;
  }

  function aBuzzNumber() {
    return number % 5 === 0;
  }

  function aFizzBuzzNumber() {
    return aFizzNumber() && aBuzzNumber();
  }

  if (aFizzBuzzNumber()) {return 'fizzbuzz';}
  if (aFizzNumber()) {return 'fizz';}
  if (aBuzzNumber()) {return 'buzz';}

  return number.toString();
};
