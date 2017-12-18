'use strict';

const calculate = require('./string-calculator');
require('should');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    calculate("").should.equal(0);
  });

  describe("with a single number should return the integer value of the number", () => {
    it("'1' => 1", () => {
      calculate("1").should.equal(1);
    });

    it("'2' => 2", () => {
      calculate("2").should.equal(2);
    });

    it("'10' => 10", () => {
      calculate("10").should.equal(10);
    });
  });

  describe("with multiple numbers should return the sum", () => {
    it("'1,2' => 3", () => {
      calculate("1,2").should.equal(3);
    });

    it("'1,3' => 4", () => {
      calculate("1,3").should.equal(4);
    });

    it("'1,2,3' => 6", () => {
      calculate("1,2,3").should.equal(6);
    });
  });

  describe("with multiple numbers and newline should return the sum", () => {
    it("'1\\n2,3' => 6", () => {
      calculate("1\n2,3").should.equal(6);
    });

    it("'1\\n2\\n2,3' => 8", () => {
      calculate("1\n2\n2,3").should.equal(8);
    });
  });

  describe("should ignore the number bigger than 1000", () => {
    it("'1001' => 0", () => {
      calculate("1001").should.equal(0);
    });

    it("'1\\n2,1001' => 3", () => {
      calculate("1\n2,1001").should.equal(3);
    });

    it("'1\\n2,1000' => 1003", () => {
      calculate("1\n2,1000").should.equal(1003);
    });
  });
});
