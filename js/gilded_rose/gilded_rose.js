module.exports = function () {
  this.Item = function (name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  };

  // "Conjured" items degrade in Quality twice as fast as normal items

  this.items = [];

  this.update_quality = function () {
    var items = this.items;


    function decreaseQualityBy(item, value) {
      if (item.quality > 0) {
        item.quality -= value
      }
    }

    function decreaseQuality(item) {
      decreaseQualityBy(item, 1);
    }

    function increaseQualityBy(item, value) {
      if (item.quality < 50) {
        item.quality += value
      }
    }

    function increaseQuality(item) {
      increaseQualityBy(item, 1);
    }

    function isLegendaryItem(item) {
      return item.name == 'Sulfuras, Hand of Ragnaros';
    }

    function isBackstagePass() {
      return item.name == 'Backstage passes to a TAFKAL80ETC concert';
    }

    function isAgedBrie() {
      return item.name == 'Aged Brie';
    }

    function isConjuredItem() {
      return item.name == 'Conjured water';
    }
    
    function decreaseSellIn(item) {
      item.sell_in -= 1;
    }

    function updateBackstagePassQuality() {
      increaseQuality(item);
      if (item.sell_in < 0) {
        item.quality = 0;
      }
      else if (item.sell_in < 5) {
        increaseQualityBy(item, 2);
      }
      else if (item.sell_in < 10) {
        increaseQuality(item);
      }
    }

    function updateAgedBrieQuality() {
      increaseQuality(item);
      if (item.sell_in < 0) {
        increaseQuality(item);
      }
    }

    function updateRegularItemsQuality() {
      decreaseQuality(item);
      if (item.sell_in < 0) {
        decreaseQuality(item);
      }
    }

    function updateConjuredItemQuality(item) {
      decreaseQualityBy(item, 2);
    }

    function updateItem(item) {

      if (isLegendaryItem(item)) {
        return;
      }

      decreaseSellIn(item);



      if (isAgedBrie()) {
        updateAgedBrieQuality();
      } else if (isBackstagePass()) {
        updateBackstagePassQuality();
      } else if (isConjuredItem()) {
        updateConjuredItemQuality(item);
      } else {
        updateRegularItemsQuality();
      }
    }

    for (var i in items) {
      var item = items[i];
      updateItem(item);
    }
  }
};
