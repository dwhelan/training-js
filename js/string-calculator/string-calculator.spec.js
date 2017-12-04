'use strict';

const calculate = require('./string-calculator');
require('should');

describe('String Calculator', function () {
  it('should return 0 when given input of empty string', function () {
    calculate('').should.equal(0);
  });

  it('should return numeric value of single number input as a string', function () {
    calculate('1').should.equal(1);
  });

  it('should handle a list of multi-digit numbers input as a string', function () {
    calculate('10,20').should.equal(30);
  });

  it('should return sum of arbitrary list of numbers input as a string', function () {
    calculate('1,2,3').should.equal(6);
    calculate('1,2').should.equal(3);
  });

  it('should handle new line chracter as a valid delimiter', function () {
    calculate('1\n2').should.equal(3);
  });

  it('should handle combination of different delimitors', function () {
    calculate('1\n2,3').should.equal(6);
  });

  it('should ignore numbers above 1000', function () {
    calculate('1001,2').should.equal(2);
  });

  it('should include numbers upto and including 1000', function () {
    calculate('1000,2').should.equal(1002);
  });

  it('should include numbers upto and including 3', function () {
    calculate('//;\n1;2').should.equal(3);
  });
});
