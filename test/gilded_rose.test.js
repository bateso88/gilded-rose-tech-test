const {Shop} = require("../src/shop");
const {RegularItem} = require("../src/regular_item");
const {AgedBrie} = require("../src/aged_brie");
const {Sulfuras} = require("../src/sulfuras");
const {BackstagePass} = require("../src/backstage_pass");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([new RegularItem("Thing", 10, 10),
  new RegularItem("Thing2", -1, 10),
  new AgedBrie("Brie", 10, 10),
  new Sulfuras("Sulfuras", 10, 10),
  new BackstagePass("Gig1", 11, 10),
  new BackstagePass("Gig2", 10, 10),
  new BackstagePass("Gig3", 5, 10),
  new BackstagePass("Gig4", -1, 10),]
  );

  const items = gildedRose.updateQuality();

  it("RegularItem quality decreases by one", function() {
    expect(items[0].quality).toEqual(9);
  });
  it("RegularItem quality decreases twice after sellIn", function() {
    expect(items[1].quality).toEqual(8);
  });
  it("AgedBrie improves", function() {
    expect(items[2].quality).toEqual(11);
  });
  it("Sulfuras remain the same", function() {
    expect(items[3].quality).toEqual(10);
  });
  it("BackstagePass quality increases by 1 when sellIn > 10", function() {
    expect(items[4].quality).toEqual(11);
  });
  it("BackstagePass quality increases by 2 when sellIn <= 10", function() {
    expect(items[5].quality).toEqual(12);
  });
  it("BackstagePass quality increases by 3 when sellIn <= 5", function() {
    expect(items[6].quality).toEqual(13);
  });
  it("BackstagePass quality is 0 sellIn <0", function() {
    expect(items[7].quality).toEqual(0);
  });
});
