/**
 * Created by isaacwatts on 9/15/16.
 */
(function(){

  angular.module('starter')
    .controller('menuController', menuController);

  function menuController(locationList, User) {
    // variables
    var loc = this;
    loc.inventory=User.playerData;

    loc.navigation = locationList.locations;
  }
})();
