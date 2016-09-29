(function () {

  angular.module('starter')
    .service('Game', Game);

  function Game($ionicPopup, $state, User) {

    // User properties
    var self = this;

    self.gameStart = gameStart;
    self.loadGame = loadGame;

    function gameStart() {
      //If game exists, prompt to start new game.
      console.log("request recieved.");
      if (!User.playerData) {
        $scope.showConfirm = function () {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Create New Game?',
            template: 'Are you sure you want to overwrite your existing game with a new game?'
          });

          confirmPopup.then(function (res) {
            if (res) {
              //reset game and go to game screen
              console.log('Yes I want to overwrite my existing game and start a new game.');
            } else {
              //leave them there.
              console.log('No, I do not want to start a new game.');
            }
          });
        };
      } else {
        console.log(self.playerData)
      }
    }

    function loadGame() {
      if (User.playerData){
        //go to game screen(homebase JS).
        $state.go('app.homebase');
      }
    }

  }
})();
