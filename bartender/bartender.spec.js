'use strict';

const Bartender = require('./bartender');
require('should');

xdescribe('Making a drink', () =>{
  describe('Charging for drinks', () =>{
    it('Should charge $9.99 for a mockito', () =>{
      const bartender = new Bartender();
      const cost = bartender.makeADrink('mockito');
      cost.should.equal(9.99);
    });
  });
});
