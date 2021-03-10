const {Item} = require("../src/item");

class RegularItem extends Item {
  updateQuality() {
    if(this.sellIn < 0) {
      this.quality -= 2         //reduce by 2 if past sell by date
    } else {
      this.quality--            //reduce by 1 if not past sell by date
    }
    if(this.quality < 0) {
      this.quality = 0          //set quality to zero if currently negative
    }
    this.sellIn--;              // reduce sellIn
  }
}

module.exports = {
  RegularItem
}