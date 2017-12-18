'use strict';

module.exports = class {
  constructor(logger){
     this.logger = logger;
  }

  makeADrink(name) {
    this.logger.log("Making a " + name);
    return 9.99;
  };
};
