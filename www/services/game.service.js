(function () {

  angular.module('starter')
    .service('Game', Game);

  function Game(User) {

    // User properties
    var self = this;
    self.gameExists = gameExists;
    function gameExists() {
     if (User.playerData) {
       return true;
     }
     else {
       return false;
     }
    }
  }
})();
