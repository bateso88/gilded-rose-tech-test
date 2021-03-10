const {ConjuredItem} = require("../src/conjured_item");

describe("ConjuredItem", function() {
  it("quality should decrease by two in 'normal' circumstances", function() {
    const item = new ConjuredItem("item 1", 25, 30);
    item.updateQuality()
    expect(item.quality).toEqual(28)
    expect(item.sellIn).toEqual(24)
  });
  it("quality should decrease by four after sellIn", function() {
    const item = new ConjuredItem("item 2", -1, 30);
    item.updateQuality()
    expect(item.quality).toEqual(26)
  });
  it("quality shouldn't decrease when already 0", function() {
    const item = new ConjuredItem("item 3", 25, 0);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
  it("quality should decrease by 1 when previous quality was 1", function(){
    const item = new ConjuredItem("thing4", 10, 1);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
  it("quality decreases by 3 when previous was 3 and after sellIn", function(){
    const item = new ConjuredItem("thing4", -2, 3);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
});