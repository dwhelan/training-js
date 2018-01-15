'use strict';

module.exports = function(logger) {
  this.makeADrink = function(name) {
    logger.log('Making a mockito');
    return 9.99;
  };
};
