const {Shop} = require("../src/shop");
const {RegularItem} = require("../src/regular_item");

describe("Gilded Rose", function() {
  const gildedRose = new Shop([new RegularItem("foo", 10, 10)]);
  it("should foo", function() {
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });
});
