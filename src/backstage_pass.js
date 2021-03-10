const {Item} = require("../src/item");

class BackstagePass extends Item {
  updateQuality() {
    this.quality++              // Increase quality by 1
    if(this.sellIn <= 10) {
      this.quality++            // Increase quality by 2 if sellIn <= 10
      if(this.sellIn <= 5) {
        this.quality++          // Increase quality by 3 if sellIn <= 5
      }
    }
    if(this.quality > 50) {
      this.quality = 50         // Set to max quality if appropriate
    }
    if(this.sellIn < 0) {
      this.quality = 0          // Set to 0 if sellIn < 0 
    }
    this.sellIn--               // reduce sellIn
  }           
}

module.exports = {
  BackstagePass
}