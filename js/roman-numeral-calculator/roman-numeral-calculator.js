'use strict';
const _ = require('lodash');

module.exports = function (number) {
  let result = '';

  if (number < 4){
    _.times(number, () => {
      result += 'I';
    });
  }
  else if (number === 4){
    result += 'IV';
  } else if (number >= 5 && number < 9) {
    result += 'V';
    _.times(number - 5, () => {
      result += 'I';
    });
  } else if (number === 9){
    result += 'IX';
  }
  else {
    _.times(number , () =>{
      result += 'I';
    });
  }

  return result;
};
