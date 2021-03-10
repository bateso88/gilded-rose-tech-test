const {Shop} = require("../src/shop");
const {RegularItem} = require("../src/regular_item");
const {AgedBrie} = require("../src/aged_brie");
const {Sulfuras} = require("../src/sulfuras");
const {BackstagePass} = require("../src/backstage_pass");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([new RegularItem("Thing", 10, 10), 
  new AgedBrie("Brie", 10, 10),
  new Sulfuras("Sulfuras", 10, 10),
  new BackstagePass("Gig", 10, 10)]
  );

  it("RegularItem deprecates", function() {
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });
  // it("AgedBrie improves", function() {
  //   const items = gildedRose.updateQuality();
  //   expect(items[1].quality).toEqual(11);
  // });
  // it("Sulfuras remain the same", function() {
  //   const items = gildedRose.updateQuality();
  //   expect(items[2].quality).toEqual(10);
  // });
  // it("BackstagePass improves", function() {
  //   const items = gildedRose.updateQuality();
  //   expect(items[3].quality).toEqual(11);
  // });
});
