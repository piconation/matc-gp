/**
 * Created by isaacwatts on 9/13/16.
 */

jQuery(document).ready(function() {
  jQuery('[data-component="looting"]').each(function() {
    var looting = new components.Looting(this);
  });
});

var components = components || {};
var latestRoll = ''


components.Looting = function(elem) {
  // Depends on jQuery
  var self = this;
  self.el = jQuery(elem);

  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;

  var finalResult = d1 + d2;
  latestRoll = finalResult;
};



