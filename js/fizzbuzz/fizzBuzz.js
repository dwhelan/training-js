module.exports = function(number) {
  var result = number.toString();

  if (isAFizzBuzzNumber(number)){
    result = 'fizzbuzz';
  } else if (isAFizzNumber(number)) {
    result = 'fizz';
  } else if (isABuzzNumber(number)) {
    result = 'buzz';
  }

  return result;
};

function isAFizzBuzzNumber(number) {
  return isAFizzNumber(number) && isABuzzNumber(number);
}

function isAFizzNumber(number)
{
  return number % 3 === 0;
}

function isABuzzNumber(number) {
  return number % 5 === 0;
}
