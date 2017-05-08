module.exports = function (number) {
  var symbols = {
       1: "I",
       4: "IV",
       5: "V",
       9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
     100: "C",
     400: "CD",
     500: "D",
     900: "CM",
    1000: "M",
  };

  var result = "";
  var symbolValues = Object.keys(symbols);

  for (var i = symbolValues.length - 1; i >= 0; i-- ) {
    appendSymbol(symbolValues[i]);
  }

  return result;

  function appendSymbol (symbolValue) {
    while (number >= symbolValue) {
      result += symbols[symbolValue];
      number -= symbolValue;
    }
  }
};

