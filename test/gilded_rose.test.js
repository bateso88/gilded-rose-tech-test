const {Shop} = require("../src/shop");
const {RegularItem} = require("../src/regular_item");
const {AgedBrie} = require("../src/aged_brie");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([new RegularItem("reg", 10, 10), 
  new AgedBrie("Brie", 10, 10)]);
  it("RegularItem deprecates", function() {
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });
  // it("AgedBrie improves", function() {
  //   const items = gildedRose.updateQuality();
  //   expect(items[1].quality).toEqual(11);
  // });
});
