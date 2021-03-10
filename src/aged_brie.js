const {Item} = require("../src/item");
const MAX_QUALITY = 50;

class AgedBrie extends Item {
  updateQuality() {
    this.sellIn--;
    this._increaseQualityIfLessThanMax()
  }
  _increaseQualityIfLessThanMax() {
    if(this.quality < MAX_QUALITY) {
      this.quality++ 
    } 
  }
}

module.exports = {
  AgedBrie, MAX_QUALITY
}