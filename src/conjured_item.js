const {Item} = require("../src/item");

class ConjuredItem extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality -= 2;
    this._reduceQualityIfSellInHasPassed()
    this._setQualityToZeroIfNecessary()
  }
  _setQualityToZeroIfNecessary() {
    if(this.quality < 0) {
      this.quality = 0
    }
  }
  _reduceQualityIfSellInHasPassed() {
    if(this.sellIn < 0) {
      this.quality -= 2
    } 
  }
}

module.exports = {
  ConjuredItem
}