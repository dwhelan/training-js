'use strict';
/* eslint-disable */

module.exports = function () {
  this.Item = function (name, sell_in, quality) {
    this.name    = name;
    this.sell_in = sell_in;
    this.quality = quality;
  };

  this.items = [];

  this.update_quality = () => this.items.forEach(item => update(item));

  function update(item) {
    function incrementQuality(amount = 1) { item.quality = Math.min(item.quality + amount, 50);}
    function decrementQuality()           { item.quality = Math.max(item.quality - 1, 0);}
    function decrementSellIn()            { item.sell_in -= 1};
    function whenExpired(callback)        { if (item.sell_in < 0) callback();}

    switch (item.name) {
      case 'Sulfuras, Hand of Ragnaros':
        // nothing ever changes with legendary items
        break;

      case 'Backstage passes to a TAFKAL80ETC concert':
        switch(true) {
          case item.sell_in < 6:  incrementQuality(3); break;
          case item.sell_in < 11: incrementQuality(2); break;
          default:                incrementQuality(1); break;
        }
        decrementSellIn();
        whenExpired(() => item.quality = 0);
        break;

      case 'Aged Brie':
        incrementQuality();
        decrementSellIn();
        whenExpired(() => incrementQuality());
        break;

      default:
        decrementQuality();
        decrementSellIn();
        whenExpired(() => decrementQuality());
    }
  }
};
