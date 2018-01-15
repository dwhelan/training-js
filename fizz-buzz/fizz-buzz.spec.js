/* eslint-disable quotes */
'use strict';

const fizzBuzz = require('./fizz-buzz');
require('should');

describe('FizzBuzz', function () {
  it("should return '1' for 1", function () {
    fizzBuzz(1).should.equal('1');
  });

  it("should return '2' for 2", function () {
    fizzBuzz(2).should.equal('2');
  });

  it("should return 'fizz' for 3", function () {
    fizzBuzz(3).should.equal('fizz');
  });

  it("should return '4' for 4", function () {
    fizzBuzz(4).should.equal('4');
  });

  it("should return 'buzz' for 5", function () {
    fizzBuzz(5).should.equal('buzz');
  });

  it("should return 'fizz' for 6", function () {
    fizzBuzz(6).should.equal('fizz');
  });

  it("should return 'fizz' for 9", function () {
    fizzBuzz(9).should.equal('fizz');
  });

  it("should return 'buzz' for 10", function () {
    fizzBuzz(10).should.equal('buzz');
  });

  it("should return 'fizzbuzz' for 15", function () {
    fizzBuzz(15).should.equal('fizzbuzz');
  });

  it("should return 'fizzbuzz' for 30", function () {
    fizzBuzz(30).should.equal('fizzbuzz');
  });
});
