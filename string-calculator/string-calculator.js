'use strict';


module.exports = StringCalculatorThatSumsInputs;

function StringCalculatorThatSumsInputs(expression) {
  if (!expression) return 0;

  return expression
    .split(/[\n,]/g)
    .map(number => number > 1000 ? 0 : parseInt(number))
    .reduce((sum, number) => sum + number);
}

