const {Item} = require("../src/item");
const MAX_QUALITY = 50;

class AgedBrie extends Item {
  updateQuality() {
    if(this.quality < MAX_QUALITY) {
      this.quality++            //increase by 1 if under 50
    } 
    this.sellIn--;              // reduce sellIn
  }
}

module.exports = {
  AgedBrie
}