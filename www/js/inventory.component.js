/**
 * Created by isaacwatts on 9/15/16.
 */
(function(){

  angular.module('starter')
    .component('inventory', { // the tag for using this is <inventory-list>
      templateUrl: "templates/inventory.html",
      controller: invController
    })
    .config(invConfig);

  function invConfig($stateProvider) {
    $stateProvider.state('inventory', {
      url: '/inventory',
      template: "<inventory-list></inventory-list>"
    })
  }

  function invController() {

    // variables
    var self = this;
    self.playerData = playerData;
  }

})();
