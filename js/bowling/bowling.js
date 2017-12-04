'use strict';

const _ = require('lodash');

module.exports = class Bowling {
  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    const PINS_IN_FRAME = 10;
    let score = 0;
    let rollIndex = 0;

    _.times(10, frame => {
      const regularScore = () => this._rolls[rollIndex] + this._rolls[rollIndex + 1];
      const isAStrike    = () => this._rolls[rollIndex] === PINS_IN_FRAME;
      const strikeBonus  = () => this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
      const isASpare     = () => regularScore() === PINS_IN_FRAME;
      const spareBonus   = () => this._rolls[rollIndex + 2];

      if (isAStrike()) {
        score += PINS_IN_FRAME + strikeBonus();
        rollIndex++;
      } else {
        if (isASpare()) {
          score += PINS_IN_FRAME + spareBonus();
        } else {
          score += regularScore();
        }
        rollIndex += 2;
      }
    });

    return score;
  }
};
