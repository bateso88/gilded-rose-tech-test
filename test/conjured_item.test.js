const {ConjuredItem} = require("../src/conjured_item");

describe("ConjuredItem", function() {
  it("quality should decrease by two in 'normal' circumstances", function() {
    const item = new ConjuredItem("thing1", 25, 30);
    item.updateQuality()
    expect(item.quality).toEqual(28)
    expect(item.sellIn).toEqual(24)
  });
  it("quality shouldn't decrease when already 0", function() {
    const item = new ConjuredItem("thing2", 25, 0);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
  it("quality decreases by 1 if quality was 1 previously", function(){
    const item = new ConjuredItem("thing3", 5, 1);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
});