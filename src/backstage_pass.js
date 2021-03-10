const {Item} = require("../src/item");
const MAX_QUALITY = 50;
const TIER_TWO_UPPER_LIMIT = 10;
const TIER_THREE_UPPER_LIMIT = 5;

class BackstagePass extends Item {
  updateQuality() {
    this.sellIn--
    this.quality++
    this._increaseQualityIfTierTwoOrThree()
    this._setQualityToMaxOrZeroIfNecessary()
  } 
  _increaseQualityIfTierTwoOrThree() {
    if(this.sellIn <= TIER_TWO_UPPER_LIMIT) {
      this.quality++            
      this._increaseQualityIfTierThree()
    }
  }  
  _increaseQualityIfTierThree() {
    if(this.sellIn <= TIER_THREE_UPPER_LIMIT) {
      this.quality++         
    }
  }
  _setQualityToMaxOrZeroIfNecessary() {
    this._setQualityToMaxIfNecessary()
    this._setQualityToZeroIfSellInHasPassed()
  }

  _setQualityToMaxIfNecessary() {
    if(this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY
    }
  } 
  _setQualityToZeroIfSellInHasPassed() {
    if(this.sellIn < 0) {
      this.quality = 0 
    }
  }       
}

module.exports = {
  BackstagePass, MAX_QUALITY, TIER_TWO_UPPER_LIMIT, TIER_THREE_UPPER_LIMIT
}