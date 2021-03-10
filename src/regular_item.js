const {Item} = require("../src/item");

class RegularItem extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality--;
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
      this.quality--
    } 
  }
}

module.exports = {
  RegularItem
}