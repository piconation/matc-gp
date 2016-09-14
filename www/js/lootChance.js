/**
 * Created by isaacwatts on 9/13/16.
 */

$.getScript("js/lootTable.js", function(){
  //alert("Script loaded but not necessarily executed.");
});

var latestRoll = '';

jQuery(document).ready(function() {
  jQuery('[data-component="looting"]').each(function() {
    var looting = new components.Looting(this);
  });
});

var components = components || {};

components.Looting = function(elem) {
  // Depends on jQuery
  var self = this;
  self.el = jQuery(elem);
  self.el.click(function () {
    self.roll();
  })

};
components.Looting.prototype.roll = function () {
  var self = this;
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;

  latestRoll = d1 + d2;
  //console.log(latestRoll);
  self.lootPick();
};
components.Looting.prototype.lootPick = function () {
  console.log("your loot is: ");
  if (latestRoll) {
    switch(latestRoll) {
      case 2:
        console.log(loot[0].name);
        break;
      case 3:
        console.log(loot[1].name);
        break;
      case 4:
        console.log(loot[2].name);
        break;
      case 5:
        console.log(loot[3].name);
        break;
      case 6:
      case 7:
        console.log(loot[4].name);
        break;
      case 8:
      case 9:
        console.log(loot[5].name);
        break;
      case 10:
        console.log(loot[6].name);
        break;
      case 11:
        console.log(loot[7].name);
        break;
      case 12:
        console.log(loot[8].name);
        break;
    }
  }
};
