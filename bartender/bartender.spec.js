'use strict';

var Bartender = require('./bartender');
const NullLogger = require('../logging/null-logger');
const Logger = require('../logging/logger');
const sinon = require('sinon');
require('should');

describe('Making a drink', function () {
  describe('Charging for drinks', function () {
    it('Should charge $9.99 for a mockito', function () {
      const bartender = new Bartender(new NullLogger());
      var cost = bartender.makeADrink('mockito');
      cost.should.equal(9.99);
    });
  });
  it('with a custom spy we can test logging', function () {
    var SpyLogger = function () {
      this.message = '';

      this.log = function (message) {
        this.message = message;
      };
    };

    const logger = new SpyLogger();
    const bartender = new Bartender(logger);

    bartender.makeADrink('mockito');

    logger.message.should.equal('Making a mockito');
  });

  it('with sinon stub logger we can test logging with less fuss', function () {
    const logger = new Logger();
    const log = sinon.stub(logger, 'log');
    const bartender = new Bartender(logger);

    bartender.makeADrink('mockito');

    sinon.assert.calledWith(log, 'Making a mockito');
  });
});
