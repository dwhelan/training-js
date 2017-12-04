'use strict';

const Bowling = require('./bowling');
const _ = require('lodash');

require('should');

describe('Bowling', function () {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  it('all gutter balls should score 0', function () {
    _.times(20, () => game.roll(0));
    game.score().should.equal(0);
  });

  it('all single pins should score 20', function () {
    _.times(20, () => game.roll(1));
    game.score().should.equal(20);
  });

  it('a spare should score 10 plus next roll', function () {
    game.roll(6);
    game.roll(4);
    game.roll(3);

    _.times(17, () => game.roll(0));

    game.score().should.equal(16);
  });

  it('a strike should score 10 plus next 2 rolls', function () {
    game.roll(10);
    game.roll(4);
    game.roll(3);

    _.times(16, () => game.roll(0));

    game.score().should.equal(24);
  });

  it('a spare should score 10 plus next roll', function () {
    game.roll(6);
    game.roll(4);
    game.roll(3);

    _.times(17, () => game.roll(0));

    game.score().should.equal(16);
  });

  it('a perfect game should score 300', function () {
    _.times(12, () => game.roll(10));

    game.score().should.equal(300);
  });
});
