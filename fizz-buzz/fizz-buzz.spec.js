'use strict';

const fizzBuzz = require('./fizz-buzz');
require('should');

describe('FizzBuzz', () => {
  it('should return the number when not divisible by 3 or 5', () => {
    fizzBuzz(1).should.equal('1');
    fizzBuzz(2).should.equal('2');
  });

  it('should return "fizz" when divisible by 3', () => {
    fizzBuzz(3).should.equal('fizz');
    fizzBuzz(18).should.equal('fizz');
  });

  it('should return "buzz" when divisible by 5', () => {
    fizzBuzz(5).should.equal('buzz');
    fizzBuzz(20).should.equal('buzz');
  });

  it('should return "fizzbuzz" when divisible by 3 and 5', () => {
    fizzBuzz(15).should.equal('fizzbuzz');
    fizzBuzz(30).should.equal('fizzbuzz');
  });
});
