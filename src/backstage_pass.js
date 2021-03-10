const {Item} = require("../src/item");
const MAX_QUALITY = 50;
const TIER_TWO_UPPER_LIMIT = 10;
const TIER_THREE_UPPER_LIMIT = 5;

class BackstagePass extends Item {
  updateQuality() {
    this.sellIn--               // reduce sellIn
    this.quality++              // Increase quality by 1
    this._increaseQualityIfTierTwoOrThree()
    this._setQualityToMaxIfNecessary()
    this._setQualityToZeroIfSellInHasPassed()
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
  _setQualityToMaxIfNecessary() {
    if(this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY // Set to max quality if appropriate
    }
  } 
  _setQualityToZeroIfSellInHasPassed() {
    if(this.sellIn < 0) {
      this.quality = 0          // Set to 0 if sellIn < 0 
    }
  }       
}

module.exports = {
  BackstagePass
}