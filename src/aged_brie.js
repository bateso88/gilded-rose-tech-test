const {Item} = require("../src/item");
const MAX_QUALITY = 50;

class AgedBrie extends Item {
  updateQuality() {
    this.sellIn--;              // reduce sellIn
    if(this.quality < MAX_QUALITY) {
      this.quality++            //increase by 1 if under 50
    } 
  }
}

module.exports = {
  AgedBrie
}