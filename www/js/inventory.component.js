/**
 * Created by isaacwatts on 9/15/16.
 */
(function(){

  angular.module('starter')
    .component('inventoryList', { // the tag for using this is <inventory-list>
      templateUrl: "templates/inventory.html",
      controller: invController
    });

  function invController() {

    // variables
    var self = this;
    self.playerData = playerData;
  }

})();
