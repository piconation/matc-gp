/**
 * Created by mattpowell on 9/16/16.
 */

(function () {

  angular.module('starter')
    .controller('homebaseController', homebaseController);

  function homebaseController(User, $state, Looting) {
    var hb = this;
    hb.getLoot = getLoot;
    hb.playerData = User.playerData;
    
    function getLoot() {
      Looting.getLoot();
    }
  }
})();
