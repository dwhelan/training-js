var calculate = require('./romanNumeralCalculator');
var expect = require("expect");

describe('Roman Numeral Calculator', function () {

  it('should return "I" given 1', function () {
    expect(calculate(1)).toBe("I");
  });

  it('should return "II" given 2', function () {
    expect(calculate(2)).toBe("II");
  });

  it('should return "III" given 3', function () {
    expect(calculate(3)).toBe("III");
  });

  it('should return "IV" given 4', function () {
    expect(calculate(4)).toBe("IV");
  });

  it('should return "V" given 5', function () {
    expect(calculate(5)).toBe("V");
  });

  it('should return "VI" given 6', function () {
    expect(calculate(6)).toBe("VI");
  });

  it('should return "VII" given 7', function () {
    expect(calculate(7)).toBe("VII");
  });

  it('should return "IX" given 9', function () {
    expect(calculate(9)).toBe("IX");
  });

  it('should return "X" given 10', function () {
    expect(calculate(10)).toBe("X");
  });

  it('should return "XI" given 11', function () {
    expect(calculate(11)).toBe("XI");
  });

  it('should return "XII" given 12', function () {
    expect(calculate(12)).toBe("XII");
  });

  it('should return "XIV" given 14', function () {
    expect(calculate(14)).toBe("XIV");
  });

  it('should return "XV" given 15', function () {
    expect(calculate(15)).toBe("XV");
  });

  it('should return "XVI" given 16', function () {
    expect(calculate(16)).toBe("XVI");
  });

  it('should return "XIX" given 19', function () {
    expect(calculate(19)).toBe("XIX");
  });

  it('should return "XX" given 20', function () {
    expect(calculate(20)).toBe("XX");
  });

  it('should return "XXI" given 21', function () {
    expect(calculate(21)).toBe("XXI");
  });

  it('should return "XXIV" given 24', function () {
    expect(calculate(24)).toBe("XXIV");
  });

  it('should return "XXXIX" given 39', function () {
    expect(calculate(39)).toBe("XXXIX");
  });

  it('should return "XL" given 40', function () {
    expect(calculate(40)).toBe("XL");
  });

  it('should return "XLI" given 41', function () {
    expect(calculate(41)).toBe("XLI");
  });

  it('should return "XLIV" given 44', function () {
    expect(calculate(44)).toBe("XLIV");
  });

  it('should return "XLIX" given 49', function () {
    expect(calculate(49)).toBe("XLIX");
  });

  it('should return "L" given 50', function () {
    expect(calculate(50)).toBe("L");
  });

  it('should return "LI" given 51', function () {
    expect(calculate(51)).toBe("LI");
  });

  it('should return "XC" given 90', function () {
    expect(calculate(90)).toBe("XC");
  });

  it('should return "XCI" given 91', function () {
    expect(calculate(91)).toBe("XCI");
  });

  it('should return "C" given 100', function () {
    expect(calculate(100)).toBe("C");
  });

  it('should return "CI" given 101', function () {
    expect(calculate(101)).toBe("CI");
  });

  it('should return "CD" given 400', function () {
    expect(calculate(400)).toBe("CD");
  });

  it('should return "D" given 500', function () {
    expect(calculate(500)).toBe("D");
  });

  it('should return "CM" given 900', function () {
    expect(calculate(900)).toBe("CM");
  });

  it('should return "M" given 1000', function () {
    expect(calculate(1000)).toBe("M");
  });

  it('should return "MMMCMXCIX" given 3999', function () {
    expect(calculate(3999)).toBe("MMMCMXCIX");
  });

});
