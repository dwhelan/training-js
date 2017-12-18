'use strict';


module.exports = class {
  constructor(logger) {
    this.logger = logger;
  }

  answer() {
    this.logger.log('Calculating the meaning of life, the universe and everything');
    return '42';
  };
};
