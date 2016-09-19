/**
 * Created by isaacwatts on 9/15/16.
 */
(function(){

  angular.module('starter')
    .component('inventory', { // the tag for using this is <inventory-list>
      templateUrl: "templates/inventory.html",
      controller: invController
    })
    .config(invController);

  function invController($stateProvider) {
    $stateProvider.state('inventory', {
      url: '/inventory',
      template: "<inventory></inventory>"
    })
  }

  function invController() {

    // variables
    var self = this;
    self.playerData = playerData;
  }

})();
