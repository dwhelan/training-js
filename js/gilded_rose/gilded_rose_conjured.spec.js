require('approvals').mocha();
var os = require('os');
var GildedRose = require('./gilded_rose');

describe("Conjured item", function() {
  it("should age twice as fast", function() {
    var gildedRose = new GildedRose();
    var items = gildedRose.items;

    // conjured

    items.push(new gildedRose.Item("Conjured water", 10, 20));

    gildedRose.update_quality();

    var strings = JSON.stringify(items).replace(/[^ \-:,\w\s]/g, "").replace(/,name/g, '\nname');

    this.verify(strings + os.EOL);
  });
});
