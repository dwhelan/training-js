'use strict';

var calculate = require('./roman-numeral-calculator');
require('should');

describe('Roman Numeral Calculator', function () {
  it('1 should return I', function () {
    calculate(1).should.equal('I');
  });

  it('4 should return IV', function () {
    calculate(4).should.equal('IV');
  });

  it('5 should return V', function () {
    calculate(5).should.equal('V');
  });

  it('9 should return IX', function () {
    calculate(9).should.equal('IX');
  });

  it('10 should return X', function () {
    calculate(10).should.equal('X');
  });

  it('40 should return XL', function () {
    calculate(40).should.equal('XL');
  });

  it('50 should return L', function () {
    calculate(50).should.equal('L');
  });

  it('90 should return XC', function () {
    calculate(90).should.equal('XC');
  });

  it('100 should return C', function () {
    calculate(100).should.equal('C');
  });

  it('400 should return CD', function () {
    calculate(400).should.equal('CD');
  });

  it('500 should return D', function () {
    calculate(500).should.equal('D');
  });

  it('900 should return CM', function () {
    calculate(900).should.equal('CM');
  });

  it('1000 should return M', function () {
    calculate(1000).should.equal('M');
  });

  it('1984 should return MCMLXXXIV', function () {
    calculate(1984).should.equal('MCMLXXXIV');
  });

  it('3999 should return MMMCMXCIX', function () {
    calculate(3999).should.equal('MMMCMXCIX');
  });
});
