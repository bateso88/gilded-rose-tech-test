const {Sulfuras} = require("../src/sulfuras");

describe("Sulfuras", function() {
  it("quality and SellIn should remain constant", function() {
    const item = new Sulfuras("sulfuras", 25, 30);
    item.updateQuality()
    expect(item.quality).toEqual(30)
    expect(item.sellIn).toEqual(25)
  });
});