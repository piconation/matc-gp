/**
 * Created by isaacwatts on 9/15/16.
 */

(function() {
  angular.module('starter')
    .component('inventory', { // the tag for using this is <inventory-list>
      templateUrl: "templates/inventory.html",
      controller: invController,
      controllerAs: 'lb'
    })
    .config(invConfig);

  function invConfig($stateProvider) {
    $stateProvider.state('inventory', {
      url: '/inventory',
      template: "<inventory-list></inventory-list>"
    })
  }

  function invController(Looting) {

    // variables
    var lb = this;
    lb.allInv = Looting.playerData;
    Looting.newLoot();
  }

})();
