const {RegularItem} = require("../src/regular_item");

describe("RegularItem", function() {
  it("quality should decrease by one in 'normal' circumstances", function() {
    const item = new RegularItem("thing1", 25, 30);
    item.updateQuality()
    expect(item.quality).toEqual(29)
    expect(item.sellIn).toEqual(24)
  });
  it("quality should decrease by two after sellIn", function() {
    const item = new RegularItem("thing2", -1, 30);
    item.updateQuality()
    expect(item.quality).toEqual(28)
  });
  it("quality shouldn't decrease when already 0", function() {
    const item = new RegularItem("thing3", 25, 0);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
  it("quality decreases by 1 when past sellIn and quality is 1", function(){
    const item = new RegularItem("thing4", -2, 1);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
});