const {Item} = require("../src/item");
const MAX_QUALITY = 50;
const TIER_TWO_UPPER_LIMIT = 10;
const TIER_THREE_UPPER_LIMIT = 5;

class BackstagePass extends Item {
  updateQuality() {
    this.sellIn--               // reduce sellIn
    this.quality++              // Increase quality by 1
    if(this.sellIn <= TIER_TWO_UPPER_LIMIT) {
      this.quality++            // Increase quality by 2 if sellIn <= 10
      if(this.sellIn <= TIER_THREE_UPPER_LIMIT) {
        this.quality++          // Increase quality by 3 if sellIn <= 5
      }
    }
    if(this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY // Set to max quality if appropriate
    }
    if(this.sellIn < 0) {
      this.quality = 0          // Set to 0 if sellIn < 0 
    }
  }           
}

module.exports = {
  BackstagePass
}