const {Item} = require("../src/item");

class ConjuredItem extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality -= 2;
    this._setQualityToZeroIfNecessary()
  }
  _setQualityToZeroIfNecessary() {
    if(this.quality < 0) {
      this.quality = 0
    }
  }
}

module.exports = {
  ConjuredItem
}