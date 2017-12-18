'use strict';

const fizzBuzz = require('./fizz-buzz');
require('should');

describe('FizzBuzz', () => {
  it('should return "1" given 1', () => {
    fizzBuzz(1).should.equal('1');
  });

  it('should return "2" given 2', () => {
    fizzBuzz(2).should.equal('2');
  });

  it('should return "fizz" given 3', () => {
    fizzBuzz(3).should.equal('fizz');
  });

  it('should return "fizz" given 6', () => {
    fizzBuzz(6).should.equal('fizz');
  });

  it('should return "buzz" given 5', () => {
    fizzBuzz(5).should.equal('buzz');
  });

  it('should return "buzz" given 10', () => {
    fizzBuzz(10).should.equal('buzz');
  });

  it('should return "fizzbuzz" given 15', () => {
    fizzBuzz(15).should.equal('fizzbuzz');
  });

  it('should return "fizzbuzz" given 30', () => {
    fizzBuzz(30).should.equal('fizzbuzz');
  });
});

