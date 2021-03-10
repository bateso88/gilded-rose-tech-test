const {BackstagePass, MAX_QUALITY, 
  TIER_TWO_UPPER_LIMIT, 
  TIER_THREE_UPPER_LIMIT} = require("../src/backstage_pass");

describe("BackstagePass", function() {
  it(`quality increases by 1 when the concert is in over ${TIER_TWO_UPPER_LIMIT}
   days`, function() {
    const item = new BackstagePass("Bs pass 1", TIER_TWO_UPPER_LIMIT + 2, 30);
    item.updateQuality()
    expect(item.quality).toEqual(31)
    expect(item.sellIn).toEqual(11)
  });
  it(`quality increases by 2 when sellIn is ${TIER_TWO_UPPER_LIMIT} or less but 
  greater than ${TIER_THREE_UPPER_LIMIT}`, function() {
    const item = new BackstagePass("Bs pass 2", TIER_TWO_UPPER_LIMIT + 1, 30);
    item.updateQuality()
    expect(item.quality).toEqual(32)
  });
  it(`quality increases by 3 when sellIn is ${TIER_THREE_UPPER_LIMIT} or less`,
   function() {
    const item = new BackstagePass("Bs pass 3", TIER_THREE_UPPER_LIMIT + 1, 30);
    item.updateQuality()
    expect(item.quality).toEqual(33)
  });
  it(`quality cannot exceed ${MAX_QUALITY}`, function() {
    const item = new BackstagePass("Bs pass 4", 5, MAX_QUALITY);
    item.updateQuality()
    expect(item.quality).toEqual(MAX_QUALITY)
  });
  it("quality becomes zero after sellIn", function() {
    const item = new BackstagePass("Bs pass 5", -1, 50);
    item.updateQuality()
    expect(item.quality).toEqual(0)
  });
});