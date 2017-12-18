'use strict';

const calculate = require('./roman-numeral-calculator');
require('should');

describe('Roman Numeral Calculator', function () {
  it('should return I for 1', () => {
    calculate(1).should.equal('I');
  });

  it('should return II for 2', () => {
    calculate(2).should.equal('II');
  });

  it('should return III for 3', () => {
    calculate(3).should.equal('III');
  });

  it('should return IV for 4', () => {
    calculate(4).should.equal('IV');
  });

  it('should return V for 5', () => {
    calculate(5).should.equal('V');
  });

  it('should return VI for 6', () => {
    calculate(6).should.equal('VI');
  });

  it('should return VIII for 8', () => {
    calculate(8).should.equal('VIII');
  });

  it('should return IX for 9', () => {
    calculate(9).should.equal('IX');
  });

  it('should return X for 10', () => {
    calculate(10).should.equal('X');
  });

  it('should return XI for 11', () => {
    calculate(11).should.equal('XI');
  });

  it('should return XIV for 14', () => {
    calculate(14).should.equal('XIV');
  });

  it('should return XV for 15', () => {
    calculate(15).should.equal('XV');
  });

  it('should return XL for 40', () => {
    calculate(40).should.equal('XL');
  });

  it('should return L for 50', () => {
    calculate(50).should.equal('L');
  });

  it('should return XC for 90', () => {
    calculate(90).should.equal('XC');
  });

  it('should return C for 100', () => {
    calculate(100).should.equal('C');
  });

  it('should return CD for 400', () => {
    calculate(400).should.equal('CD');
  });

  it('should return D for 500', () => {
    calculate(500).should.equal('D');
  });

  it('should return CM for 900', () => {
    calculate(900).should.equal('CM');
  });

  it('should return M for 1000', () => {
    calculate(1000).should.equal('M');
  });

  it('should return MCMLXXXIV for 1984', () => {
    calculate(1984).should.equal('MCMLXXXIV');
  });

  it('should return MMMCMXCIX for 3999', () => {
    calculate(3999).should.equal('MMMCMXCIX');
  });


});
