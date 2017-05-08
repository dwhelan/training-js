const fizzBuzz = require('./fizzBuzz');
const expect = require("chai").expect;

describe('FizzBuzz', () => {
  describe('should return the number as a string when not divisible by 3 or 5', () => {
    it('should return "1" given 1', () => {
      expect(fizzBuzz(1)).to.equal('1');
    });

    it('should return "2" given 2', () => {
      expect(fizzBuzz(2)).to.equal('2');
    });
  });

  describe('should return "fizz" when divisible by 3', () => {
    it('should return "fizz" given 3', () => {
      expect(fizzBuzz(3)).to.equal('fizz');
    });

    it('should return "fizz" given 6', () => {
      expect(fizzBuzz(6)).to.equal('fizz');
    });
  });

  describe('should return "buzz" when divisible by 5', () => {
    it('should return "buzz" given 5', () => {
      expect(fizzBuzz(5)).to.equal('buzz');
    });

    it('should return "buzz" given 10', () => {
      expect(fizzBuzz(10)).to.equal('buzz');
    });
  });

  describe('should return "fizzbuzz" when divisible by 3 and 5', () => {
    it('should return "fizzbuzz" given 15', () => {
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
    });

    it('should return "fizzbuzz" given 30', () => {
      expect(fizzBuzz(30)).to.equal('fizzbuzz');
    });
  });

});
