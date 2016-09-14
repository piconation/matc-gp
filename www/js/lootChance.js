/**
 * Created by isaacwatts on 9/13/16.
 */

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
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;

  latestRoll = d1 + d2;
  console.log(latestRoll);
};

