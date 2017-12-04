'use strict';

const sinon = require('sinon');
var Bartender = require('./bartender');
const Logger = require('../logging/logger');
const NullLogger = require('../logging/null-logger');

require('should');

describe('Making a drink', function () {
  describe('Charging for drinks', function () {
    it('Should charge $9.99 for a mockito', function () {
      var bartender = new Bartender(new NullLogger());
      var cost = bartender.makeADrink('mockito');
      cost.should.equal(9.99);
    });
  });

  describe('logging for drinks', function () {
    it('Should log making a mockito', function () {
      const logger = new Logger();
      const log = sinon.stub(logger, 'log');

      var bartender = new Bartender(logger);
      bartender.makeADrink('mockito');

      sinon.assert.calledWith(log, 'Making a mockito');
    });
  });
});
