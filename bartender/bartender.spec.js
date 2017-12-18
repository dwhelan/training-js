'use strict';

const Bartender = require('./bartender');
const Logger = require('../logging/logger');
const NullLogger = require('../logging/null-logger');
const sinon = require('sinon');
require('should');

describe('Making a drink', () =>{
  describe('Charging for drinks', () =>{
    it('Should charge $9.99 for a mockito', () =>{
      const bartender = new Bartender(new NullLogger);
      const cost = bartender.makeADrink('mockito');
      cost.should.equal(9.99);
    });

    it("Should log 'Making a maquito'", () => {
      const SpyLogger = function () {
        this.message = '';

        this.log = function (message) {
          this.message = message;
        };
      };

      const logger = new SpyLogger();
      const bartender = new Bartender(logger);

      bartender.makeADrink('maquito');

      logger.message.should.equal('Making a maquito');
    });
    
    it('with sinon stub logger we can test logging with less fuss', () => {
      const logger = new Logger();
      const log = sinon.stub(logger, 'log');
      const bartender = new Bartender(logger);

      bartender.makeADrink('maquito');
      sinon.assert.calledWith(log, 'Making a maquito');
    });

    it('with sinon mock logger we can test logging with less fuss', () => {
      const logger = new Logger();
      const log = sinon.mock(logger, 'log');
      const bartender = new Bartender(logger);
      log.expects('log').withArgs('Making a maquito');

      bartender.makeADrink('maquito');

      log.verify();
    });
  });

});
