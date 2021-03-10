const {RegularItem} = require("../src/regular_item");
const {AgedBrie} = require("../src/aged_brie");
const {Sulfuras} = require("../src/sulfuras");
const {BackstagePass} = require("../src/backstage_pass");
const {ConjuredItem} = require("../src/conjured_item");

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateItemQuality() {
    for (let i = 0; i < this.items.length; i++) {
     this.items[i].updateQuality()
    }
    return this.items;
  }
}

module.exports = {
  Shop, RegularItem, AgedBrie, Sulfuras, BackstagePass, ConjuredItem
}
