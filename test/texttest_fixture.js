const {  
  Shop, 
  RegularItem, 
  AgedBrie, 
  Sulfuras, 
  BackstagePass,
  ConjuredItem
} = require("../src/shop");

const items = [
  new RegularItem("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new RegularItem("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 45),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 40),
  new ConjuredItem("Conjured Mana Cake", 3, 6),
  new ConjuredItem("Conjured Mana Cake", 1, 45),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateItemQuality();
}
