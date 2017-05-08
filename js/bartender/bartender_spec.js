var Bartender = require('./bartender');
var expect = require("expect");
var Logger = require('../logging/logger');
var NullLogger = require('../logging/null_logger');
var sinon = require('sinon');

describe('Making a drink', function () {
  describe("Charging for drinks", function () {
    xit("Should charge $9.99 for a mockito", function () {
      var bartender = new Bartender(new Logger());
      var cost = bartender.makeADrink("mockito");
      expect(cost).toBe(9.99);
    });

    it("Should charge $9.99 for a mockito", function () {
      var bartender = new Bartender(new NullLogger());
      var cost = bartender.makeADrink("mockito");
      expect(cost).toBe(9.99);
    });
  });

  describe('logging', function () {
    it("with a custom spy we can test logging", function () {
      var SpyLogger = function () {
        this.message = "";

        this.log = function(message) {
          this.message = message;
        };
      };
      var logger = new SpyLogger();
      var bartender = new Bartender(logger);

      bartender.makeADrink("mockito");

      expect(logger.message).toBe("making a mockito");
    });

    it("with a stub we can test logging", function(){
      var logger = new Logger();
      var log = sinon.stub(logger, "log");
      var bartender = new Bartender(logger);

      bartender.makeADrink("mockito");

      sinon.assert.calledWith(log, "making a mockito");
    });

    it("with a mock we can test logging", function() {
      var logger = new Logger();
      var log = sinon.mock(logger);
      var bartender = new Bartender(logger);

      log.expects("log").withArgs("making a mockito");

      bartender.makeADrink("mockito");

      log.verify();
    });

  });
});
