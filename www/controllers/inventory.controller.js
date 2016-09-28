/**
 * Created by isaacwatts on 9/15/16.
 */
(function(){

  angular.module('starter')
      .controller('invController', invController);

  function invController(Looting) {

    // variables
    var fl = this;
    fl.newloot = newLoot;
    
    function newLoot() {
      Looting.getLoot();
    }
  }

})();
