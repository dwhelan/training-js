'use strict';

module.exports = number => {
  let isBuzzNumber = () => number % 5 === 0;
  let isFizzNumber = () => number % 3 === 0;

  if (isFizzNumber() && isBuzzNumber()) return "fizzbuzz";
  if (isBuzzNumber()) return "buzz";
  if (isFizzNumber()) return "fizz";

  return number.toString();
};
