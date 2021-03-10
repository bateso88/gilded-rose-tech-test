const {AgedBrie, MAX_QUALITY} = require("../src/aged_brie");

describe("AgedBrie", function() {
  it("quality should increase by one in 'normal' circumstances", function() {
    const item = new AgedBrie("brie1", 25, 30);
    item.updateQuality()
    expect(item.quality).toEqual(31)
    expect(item.sellIn).toEqual(24)
  });
  it(`quality should remain the same at ${MAX_QUALITY}`, function() {
    const item = new AgedBrie("brie2", 25, 50);
    item.updateQuality()
    expect(item.quality).toEqual(MAX_QUALITY)
  });
});