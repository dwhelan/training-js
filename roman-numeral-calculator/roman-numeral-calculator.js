'use strict';

module.exports = function(arabicNumber) {

    const arabicArray = [1000,  900, 500,  400,  100,   90,  50,   40,  10,    9,   5,    4,   1 ];
    const romanArray =  [  'M', 'CM', 'D', 'CD',  'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let romanString = '';

    for (let i = 0;i <= romanArray.length;i++) {

      while (arabicNumber >= arabicArray[i]) {
        arabicNumber = arabicNumber - arabicArray[i];
        romanString = romanString + romanArray[i];
      }

    }

    return romanString;
};
