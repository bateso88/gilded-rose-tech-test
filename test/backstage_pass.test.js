const {BackstagePass} = require("../src/backstage_pass");

describe("BackstagePass", function() {
  it("quality increases by 1 when the concert is in over 10 days", function() {
    const item = new BackstagePass("backstage pass 1", 11, 30);
    item.updateQuality()
    expect(item.quality).toEqual(31)
    expect(item.sellIn).toEqual(10)
  });
  it("quality increases by 2 when {5 < sellIn <= 10}", function() {
    const item = new BackstagePass("backstage pass 2", 10, 30);
    item.updateQuality()
    expect(item.quality).toEqual(32)
  });
  it("quality increases by 3 when sellIn is 5 or less", function() {
    const item = new BackstagePass("backstage pass 3", 5, 30);
    item.updateQuality()
    expect(item.quality).toEqual(33)
  });
  it("quality cannot exceed 50", function() {
    const item = new BackstagePass("backstage pass 4", 5, 50);
    item.updateQuality()
    expect(item.quality).toEqual(50)
  });
  it("quality becomes zero after sellIn", function() {
    const item = new BackstagePass("backstage pass 5", -1, 50);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
});