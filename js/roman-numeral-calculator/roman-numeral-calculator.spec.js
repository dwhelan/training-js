'use strict';
const _ = require('lodash');

var calculate = require('./roman-numeral-calculator');
require('should');

describe('Roman Numeral Calculator', function () {

  const numbers = {
    1: 'I'
    , 2: 'II'
    , 3: 'III'
    , 4: 'IV'
    , 5: 'V'
    , 6: 'VI'
    , 7: 'VII'
    , 8: 'VIII'
    , 9: 'IX'
  };

  _.map(numbers, (roman, arabic) => {

    it(`should convert ${arabic} to "${roman}"`, function () {
      calculate(+arabic).should.equal(roman);
    });
  });
});
