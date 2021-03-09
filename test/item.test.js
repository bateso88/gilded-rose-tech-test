const {Item} = require("../src/item");

describe("Item", function() {
  it("should have a name, a sellIn and a quality", function() {
    const item = new Item("thing", 25, 30);
    expect(item.name).toEqual("thing")
    expect(item.sellIn).toEqual(25)
    expect(item.quality).toEqual(30)
  });
});