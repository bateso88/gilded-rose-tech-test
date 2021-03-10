const {Item} = require("../src/item");

class AgedBrie extends Item {
  updateQuality() {
    if(this.quality < 50) {
      this.quality++            //increase by 1 if under 50
    } 
    this.sellIn--;              // reduce sellIn
  }
}

module.exports = {
  AgedBrie
}