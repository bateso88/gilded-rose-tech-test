const { Shop, 
        RegularItem, 
        AgedBrie, 
        Sulfuras, 
        BackstagePass, TIER_TWO_UPPER_LIMIT,
        ConjuredItem
      } = require("../src/shop");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([
    new RegularItem("Thing", 10, 10),
    new AgedBrie("Brie", 10, 10),
    new Sulfuras("Sulfuras", 10, 10),
    new BackstagePass("Gig", 12, 10),
    new ConjuredItem("Conjured thing", 10, 10),
  ]);

  const items = gildedRose.updateItemQuality();
  // Testing for "normal" state. See unit tests for edge cases.

  it("RegularItem quality decreases by one", function() {
    expect(items[0].quality).toEqual(9);
  });
  it("AgedBrie improves", function() {
    expect(items[1].quality).toEqual(11);
  });
  it("Sulfuras remain the same", function() {
    expect(items[2].quality).toEqual(10);
  });
  it(`BackstagePass quality increases by 1 when sellIn > ${TIER_TWO_UPPER_LIMIT}
  `, function() {
    expect(items[3].quality).toEqual(11);
  });
  it("Conjured quality decreses by two", function() {
    expect(items[4].quality).toEqual(8);
  });
});
