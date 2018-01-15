'use strict';

const add = require('./string-calculator');
require('should');

describe('String Calculator', () => {
  it('empty string should return 0', () => {
    add('').should.equal(0);
  });

  describe('with a single number should return its numeric value', () => {
    it('"1" -> 1', () => {
      add('1').should.equal(1);
    });

    it('"2" -> 2', () => {
      add('2').should.equal(2);
    });
  });

  describe('with two numbers should return their sum', () => {
    it('"4,5" -> 9', () => {
      add('4,5').should.equal(9);
    });

    it('"5,6" -> 11', () => {
      add('5,6').should.equal(11);
    });
  });

  describe('with multiple numbers should return their sum', () => {
    it('"1,2,3" -> 6', () => {
      add('1,2,3').should.equal(6);
    });
  });

  describe('support new line seperator', () => {
    it('"1\\n2" -> 3', () => {
      add('1\n2').should.equal(3);
    });

    it('"1\\n2,3" -> 6', () => {
      add('1\n2,3').should.equal(6);
    });
  });

  describe('numbers bigger than 1000 should be ignored', () => {
    it('"1,1001" -> 1', () => {
      add('1,1001').should.equal(1);
    });

    it('"1000,1" -> 1001', () => {
      add('1000,1').should.equal(1001);
    });
  });
});
