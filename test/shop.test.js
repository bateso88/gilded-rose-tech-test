const {Shop, RegularItem} = require("../src/shop");

describe("Shop", function() {
  it("should have items", function() {
    const shop = new Shop(["item1", "item2"]);
    expect(shop.items).toEqual(["item1", "item2"])
  });
  it("items should default to an empty array", function() {
    const shop = new Shop;
    expect(shop.items instanceof Array).toBe(true)
  });
  it("should call updateQuality on its items", function() {
    const item = new RegularItem;
    const shop = new Shop([item]);
    const spy = jest.spyOn(item, 'updateQuality')
    shop.updateItemQuality();
    expect(spy).toHaveBeenCalled()
  });
});