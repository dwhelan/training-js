'use strict';

module.exports = function (number) {

  let romanNumerals = '';

  const numberToRoman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  const arabics = Object.keys(numberToRoman).reverse();

  arabics.forEach(arabic => {
    while (number >= arabic) {
      romanNumerals += numberToRoman[arabic];
      number -= arabic;
    }
  });

  return romanNumerals;
};
