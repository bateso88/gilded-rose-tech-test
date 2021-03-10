const {Item} = require("../src/item");

class BackstagePass extends Item {
  updateQuality() {
    this.quality++
    if(this.sellIn <= 10) {
      this.quality++
      if(this.sellIn <= 5) {
        this.quality++
      }
    }
    if(this.quality > 50) {
      this.quality = 50
    }
    if(this.sellIn < 0) {
      this.quality = 0
    }
    this.sellIn--
  }           
}

module.exports = {
  BackstagePass
}